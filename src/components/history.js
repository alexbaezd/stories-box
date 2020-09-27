import React, {useState,useEffect} from 'react'
import styled from "styled-components"
import axios from "axios"

const HistoryContainer = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-radius: 2px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  height: 220px;
  background: white;
  @media (max-width: 640px) {
    height: auto;
    grid-template-columns: 100%;
  }
`

const HistoryTitle = styled.h3`
  color: #7f8082;
  font-size: 2vmin;
  margin-bottom: 0.5rem;
  @media (max-width: 640px) {
    font-size: 4vmin;
  }
`
const HistoryButtonGroup = styled.div`
display:flex;
justify-content:flex-end;
padding:0 0.5rem;
gap:0.5rem;

`

const HistoryButton = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  background: transparent;
  border: 1px solid #6f90fc;
  color: black;
  margin-right: 0.5rem;
`
const HistoryDeleteButton = styled.button`
  padding: 0.3rem 1rem;
  border-radius: 5px;
  background: transparent;
  border: 1px solid #e6496b;
  color: black;
  cursor: pointer;
  margin-right: 0.5rem;
`
const HistoryDescription = styled.p`
  color: #8d93ab;
  font-size: 0.8rem;
  font-weight: 200;
  margin-bottom: 1rem;
  padding-right:3rem;
  @media (max-width: 640px) {
    padding-right:0;
  }
`
const HistoryImage = styled.img`
  width:420px;
  height: 190px;
  border-radius:3px;
`

const HistoryReadGroup = styled.div`
  border: 1px solid #66bfbf;
  padding: 0.3rem 0.6rem;
  border-radius: 5px;
  width: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
`


const History = ({ history, reloadData }) => {
  const [openGraph, setOpenGraph] = useState(null);
  const [deleteHistory, setDeleteHistory] = useState(false)
  const [createHistory, setCreateHistory] = useState(false)

  useEffect(() => {
    axios
      .get(`${process.env.GATSBY_URL_API_OPG}/?ogUrl=${history.url}`)
      .then(response => {
        setOpenGraph(response.data)
      })
      setCreateHistory(true)
  }, [history.url])

  //TODO: delete
  const handleDelete = async () => {
    setDeleteHistory(true)
    const id = history._id
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/delete-history`, { id })
      .then(reloadData)
  }
  //TODO: complete Read
  const handleRead = async () => {
    const {_id,title,url,read} = history
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/isread`, {
        id: _id,
        title,
        url,
        read: !read,
      })
      .then(reloadData)
  }

  return (
    <HistoryContainer
      className={`${history.read && "activeRead"}
        ${deleteHistory && "deleteHistory"}
        ${createHistory && "createHistory"}`}
    >
      <div>
        {openGraph && (
          <HistoryImage
            src={openGraph.ogImage && openGraph.ogImage.url}
            alt={history.title}
          />
        )}
      </div>
      <div>
        <HistoryTitle>{history.title}</HistoryTitle>
        <p>{process.env.GATSBY_URL_API_OPG}</p>
        {openGraph && (
          <HistoryDescription>{`${String(openGraph.ogDescription).substring(
            0,
            140
          )}...`}</HistoryDescription>
        )}
        <HistoryButtonGroup>
          <HistoryButton href={history.url} target="_blank" rel="noreferrer">
            <span role="img" aria-label="link">
               🔗
            </span>
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
              <span role="img" aria-label="read">
                📖
              </span>
            </label>
          </HistoryReadGroup>
          {/*  <HistoryMarkRead onClick={handleRead}>
            Marcar como leido
          </HistoryMarkRead> */}
          <HistoryDeleteButton onClick={handleDelete}>
            <span role="img" aria-label="trash">
              🗑
            </span>
          </HistoryDeleteButton>
        </HistoryButtonGroup>
      </div>
    </HistoryContainer>
  )
}

export default History
