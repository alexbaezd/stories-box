import axios from "axios"
import React from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import styled from "styled-components"
import { BoardLoader } from "../components/contendLoader"
import Form from "../components/formAddStory"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Stories from "../components/stories"
import { useStories } from "../hooks/useStories"
import {
  getItemStyle,
  getListStyle,
  getTitle,
  move,
  reorder,
} from "../utils/dnd"

const BoardContainer = styled.div`
  padding: 0 4rem 2rem;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-auto-columns: 33%;
  gap: 1rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  @media (max-width: 1400px) {
    grid-auto-columns: 35%;
    gap: 2rem;
  }
  @media (max-width: 1100px) {
    grid-auto-columns: 45%;
  }
  @media (max-width: 960px) {
    grid-auto-columns: 55%;
  }
  @media (max-width: 760px) {
    grid-auto-columns: 75%;
  }

  @media (max-width: 640px) {
    grid-auto-columns: 89%;
  }
  @media (max-width: 414px) {
    grid-auto-columns: 100%;
    gap: 4rem;
  }
`
const Column2 = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  margin-right: 1.5rem;
`
const BoardColumn = styled.div`
  width: clamp(250px, 60vw, 420px);
  min-height: 80vh;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3);

  border-top: ${props =>
    props.borderColor === 0
      ? "8px solid #e6496b"
      : props.borderColor === 1
      ? "8px solid #457b9d"
      : "8px solid #2a9d8f"};
`
const BoardColumnH2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
`

/**
 * TODO: sub de user/auth0 => getSession()
 * const session = getSession(req,res)
 * const userID = session.user.sub;
 */
const IndexPage = () => {
  const userID = "lore"
  const [status, setStatus, columns, setColumns] = useStories(userID)

  const reloadData = () => setStatus("loading")

  const onDragEnd = result => {
    const { source, destination, draggableId } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sourceColumnIndex = +source.droppableId
    const destinationColumnIndex = +destination.droppableId

    if (sourceColumnIndex === destinationColumnIndex) {
      // Misma Columna
      const items = reorder(
        columns[sourceColumnIndex],
        source.index,
        destination.index
      )

      const newState = [...columns]
      newState[sourceColumnIndex] = items

      setColumns(newState)
    } else {
      // Diferente Columna
      const result = move(
        columns[sourceColumnIndex],
        columns[destinationColumnIndex],
        source,
        destination
      )

      const newState = [...columns]
      newState[sourceColumnIndex] = result[sourceColumnIndex]
      newState[destinationColumnIndex] = result[destinationColumnIndex]

      setColumns(newState)

      const tmpStory = newState[destinationColumnIndex]

      const tmpFilter = tmpStory.filter(item => {
        return item._id === draggableId
      })

      const item = tmpFilter[0]
      const updateColumnIndex = {
        id: item._id,
        userID: item.userID,
        title: item.title,
        url: item.url,
        read: item.read,
        image: item.image,
        description: item.description,
        note: item.note,
        columnIndex: destinationColumnIndex,
      }

      handleUpdateColumn(updateColumnIndex).then(res =>
        console.log("update-stories")
      )
    }
  }

  const handleUpdateColumn = async updateColumnIndex => {
    await axios
      .post(
        `${process.env.GATSBY_URL_FUNCTIONS}/update-column`,
        updateColumnIndex
      )
      .then(reloadData)
  }

  return (
    <Layout>
      <SEO title="Home" />
      {columns || status === "loaded" ? (
        <>
          <Form reloadData={reloadData} count={columns[0].length} />
          <BoardContainer className="board-container">
            <DragDropContext onDragEnd={onDragEnd}>
              {columns.map((el, ind) => {
                return (
                  <Column2 key={ind}>
                    <BoardColumnH2>{getTitle(ind)}</BoardColumnH2>
                    <Droppable droppableId={`${ind}`}>
                      {(provided, snapshot) => (
                        <BoardColumn
                          ref={provided.innerRef}
                          style={getListStyle(snapshot.isDraggingOver)}
                          borderColor={ind}
                          {...provided.droppableProps}
                        >
                          {el.map((item, index) => {
                            return (
                              <Draggable
                                key={item._id}
                                draggableId={item._id}
                                index={index}
                              >
                                {(provided, snapshot) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={getItemStyle(
                                      snapshot.isDragging,
                                      provided.draggableProps.style
                                    )}
                                  >
                                    <div
                                      style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-around",
                                      }}
                                    >
                                      <Stories
                                        story={item}
                                        reloadData={reloadData}
                                      />
                                      {/* <button
                                      type="button"
                                      onClick={() => {
                                        const newState = [...columns]
                                        newState[ind].splice(index, 1)
                                        console.log("NewState", newState)
                                        setCards(
                                          newState.filter(group => group.length)
                                        )
                                        setColumns(newState)
                                      }}
                                    >
                                      delete
                                    </button> */}
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            )
                          })}
                          {provided.placeholder}
                        </BoardColumn>
                      )}
                    </Droppable>
                  </Column2>
                )
              })}
            </DragDropContext>
          </BoardContainer>
        </>
      ) : (
        <BoardLoader />
      )}
    </Layout>
  )
}

export default IndexPage
