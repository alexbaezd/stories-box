// fake data generator
export const getItems = (count, offset = 0) =>
  Array.from({ length: count }, (v, k) => k).map(k => ({
    id: `item-${k + offset}-${new Date().getTime()}`,
    content: `item ${k + offset}`,
  }))

export const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

/**
 * Moves an item from one list to another list.
 */
export const move = (
  source,
  destination,
  droppableSource,
  droppableDestination
) => {
  const sourceClone = Array.from(source)
  const destClone = Array.from(destination)
  const [removed] = sourceClone.splice(droppableSource.index, 1)

  destClone.splice(droppableDestination.index, 0, removed)

  const result = {}
  result[droppableSource.droppableId] = sourceClone
  result[droppableDestination.droppableId] = destClone

  return result
}

const grid = 7

export const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: `${grid}px ${grid * 2}px 0 ${grid * 2}px`,
  //margin: `0 0 ${grid}px 0`,
  //borderRadius: "15px",
  // change background colour if dragging
  //background: isDragging ? "#457b9d" : "white",

  // styles we need to apply on draggables
  ...draggableStyle,
})

export const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? "rgba(255, 243, 176, 0.7)" : "white",
  padding: grid,
})

export const getTitle = key => {
  switch (key) {
    case 0:
      return "Por Leer"
    case 1:
      return "Leyendo"
    case 2:
      return "Leido"

    default:
      return null
  }
}
