import React from "react"
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import { getItemStyle, getListStyle, getTitle } from "../../utils/dnd"
import Stories from "../stories"
import {
  BoardColumn,
  BoardColumnH2,
  BoardColumnWrapper,
  BoardContainer,
} from "./styled"

const Board = ({ onDragEnd, columns, reloadData }) => (
  <BoardContainer className="board-container">
    <DragDropContext onDragEnd={onDragEnd}>
      {columns.map((el, ind) => {
        return (
          <BoardColumnWrapper key={ind}>
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
                            <Stories story={item} reloadData={reloadData} />
                          </div>
                        )}
                      </Draggable>
                    )
                  })}
                  {provided.placeholder}
                </BoardColumn>
              )}
            </Droppable>
          </BoardColumnWrapper>
        )
      })}
    </DragDropContext>
  </BoardContainer>
)

export default Board
