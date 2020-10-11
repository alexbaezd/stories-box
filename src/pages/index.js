import React from "react"
import styled from "styled-components"
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd"

import Form from "../components/formAddHistory";
import Histories from "../components/histories"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useHistories } from "../hooks/useHistories";


const HistoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 0.5rem;

  & > div:first-of-type {
    border-top: 5px solid #e6496b;
  }
`

const IndexPage = () =>{

  const [histories, setHistories , setStatus] = useHistories()
  const reloadData = () => setStatus("loading")

  const handleOnDragEnd = (result) =>{
    const {source,destination} = result;

    if(!destination) return 
    if(destination.index === source.index) return;
    
    const copyState = Array.from(histories)
    const [reorderedItem] = copyState.splice(source.index,1)
    copyState.splice(destination.index,0,reorderedItem)
    setHistories(copyState)
  }

  return (
    <Layout>
      <SEO title="Home" />
      <Form reloadData={reloadData} />
      {histories ? (
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="histories">
            {provided => (
              <HistoriesGroup
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {histories.map((history, index) => (
                  <Draggable
                    key={history._id}
                    draggableId={history._id}
                    index={index}
                  >
                    {provided => (
                      <Histories
                        innerRef={provided.innerRef}
                        provided={provided}
                        history={history}
                        reloadData={reloadData}
                      />
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </HistoriesGroup>
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
