import React from "react"
import styled from "styled-components"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

import Form from "../components/formAddStory";
import Stories from "../components/stories"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useStories } from "../hooks/useStories"


const StoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;

  & > div:first-of-type {
    border-top: 5px solid #e6496b;
  }
`
// TODO: update schema  => FAUNADB


const IndexPage = () =>{

  const [stories, setStories , setStatus] = useStories()
  const reloadData = () => setStatus("loading")

  const handleOnDragEnd = (result) =>{
    const {source,destination} = result;

    if(!destination) return 
    if(destination.index === source.index) return;
    
      console.log(
        "Current Priority",
        destination,
        stories[destination.index].title
      )
      console.log("source", source, stories[source.index].title)

    const copyState = Array.from(stories)
    const [reorderedItem] = copyState.splice(source.index,1)
    copyState.splice(destination.index,0,reorderedItem)
    setStories(copyState)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Form reloadData={reloadData} />
      {stories ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="stories">
            {provided => (
              <StoriesGroup
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {stories.map((story, index) => (
                  <Draggable
                    key={story._id}
                    draggableId={story._id}
                    index={index}
                  >
                    {provided => (
                      <Stories
                        innerRef={provided.innerRef}
                        provided={provided}
                        story={story}
                        reloadData={reloadData}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </StoriesGroup>
            )}
          </Droppable>
        </DragDropContext>
      ) : (
        <p>Loading ......</p>
      )}
    </Layout>
  )
}

export default IndexPage
