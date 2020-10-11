import React from 'react'
import styled from "styled-components"

import { MyLoaderImage, MyLoaderText } from "./contendLoader"

const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  height: 240px;
  background: white;
  align-items:center;
  justify-content:center;
  @media (max-width: 640px) {
    height: auto;
    grid-template-columns: 100%;
  }
`

const HistoryTitle = styled.a`
  color: #7f8082;
  font-size: 2vmin;
  font-weight: 600;
  margin-bottom: 0rem;
  transition: color 0.3s;
  display: block;
  &:hover {
    color: #e6496b;
  }
  @media (max-width: 640px) {
    font-size: 4vmin;
  }
`

const HistoryNote = styled.small`
  color: #e6496b;
  margin: 0;
  font-style: italic;
  margin-bottom:1.5rem;
`
const HistoryButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 0.5rem;
  gap: 0.5rem;
  @media (max-width: 640px) {
    justify-content:space-around;
  }
`

const HistoryButton = styled.a`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  text-decoration: none;
  background: transparent;
  border: 1px solid #6f90fc;
  color: black;
  margin-right: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`
const HistoryDeleteButton = styled.button`
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #e6496b;
  color: black;
  cursor: pointer;
  margin-right: 0.5rem;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`
const HistoryDescription = styled.p`
  color: #8d93ab;
  font-size: 0.8rem;
  font-weight: 200;
  margin-top: 0.1rem;
  margin-bottom: 0.5rem;
  padding-right:0.5rem;
  @media (max-width: 640px) {
    margin-bottom: 0.8rem;
  }
`
const HistoryImage = styled.img`
  width: 420px;
  height: 190px;
  border-radius: 3px;
  @media (max-width: 640px) {
   display:none;
  }
`

const HistoryReadGroup = styled.div`
  border: 1px solid #66bfbf;
  padding: 0.3rem;
  border-radius: 5px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: transform 0.3s;
  &:hover {
    transform: translateY(-2px);
  }
`


export const History = ({
  loadHistory,
  HistoryClass,
  history,
  handleDelete,
  handleRead,
  provided,
  innerRef,
}) => (
  <HistoryContainer
    className={HistoryClass}
    {...provided.draggableProps}
    {...provided.dragHandleProps}
    ref={innerRef}
  >
    {loadHistory ? (
      <>
        <MyLoaderImage />
        <MyLoaderText />
      </>
    ) : (
      <>
        <HistoryImage src={history.image} alt={history.title} />
        <div>
          <HistoryTitle
            href={history.url}
            target="_blank"
            rel="noopener noreferrer"
          >
          {history.title}
          </HistoryTitle>
          <HistoryNote>
            <span
              style={{ fontSize: "1.2rem" }}
              role="img"
              aria-label="remainder"
            >
              🛋
            </span>
            {history.note}
          </HistoryNote>
          <HistoryDescription>{`${String(history.description).substring(0,99)}...`}</HistoryDescription>
          <HistoryButtonGroup>
            <HistoryButton href={history.url} target="_blank" rel="noreferrer">
              <span role="img" aria-label="link">🔗</span>
            </HistoryButton>
            <HistoryReadGroup>
              <input
                name={`h-${history._id}`}
                id={`h-${history._id}`}
                type="checkbox"
                checked={history.read}
                onChange={handleRead}
              />
              <label htmlFor={`h-${history._id}`}>
                <span role="img" aria-label="read">📖</span>
              </label>
            </HistoryReadGroup>
            <HistoryDeleteButton onClick={handleDelete}>
              <span role="img" aria-label="trash">🗑</span>
            </HistoryDeleteButton>
          </HistoryButtonGroup>
        </div>
      </>
    )}
  </HistoryContainer>
)