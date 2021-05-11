import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react"
import axios from "axios"
import React from "react"
import Board from "../components/Board"
import Form from "../components/Form"
import { AddStoryButton } from "../components/Form/styled"
import Layout from "../components/layout"
import { BoardLoader } from "../components/Utils/contendLoader"
import Seo from "../components/Utils/seo"
import { useStories } from "../hooks/useStories"
import { useToggle } from "../hooks/useToggle"
import { move, reorder } from "../utils/dnd"

const App = () => {
  const { user } = useAuth0()
  const userID = user.sub

  const [reload, setReload, columns, setColumns] = useStories(userID)
  const [isOn, toggleIsOn] = useToggle()

  const reloadData = () => setReload("loading")

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

      const tmpStory = newState[destinationColumnIndex]

      const getItemByDraggableId = tmpStory.filter(item => {
        return item._id === draggableId
      })

      const item = getItemByDraggableId[0]

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
      setColumns(newState)
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
      <Seo title="Home" />
      {columns || reload === "loaded" ? (
        <>
          <>
            <AddStoryButton onClick={toggleIsOn}>
              {isOn ? "-" : "+"}
            </AddStoryButton>
            {isOn && (
              <Form
                reloadData={reloadData}
                count={columns[0].length}
                userSub={userID}
                toggleIsOn={toggleIsOn}
                isOn={isOn}
              />
            )}
          </>

          <Board
            onDragEnd={onDragEnd}
            columns={columns}
            reloadData={reloadData}
          />
        </>
      ) : (
        <BoardLoader />
      )}
    </Layout>
  )
}

export default withAuthenticationRequired(App)
