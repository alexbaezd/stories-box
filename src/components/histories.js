import React, {useState} from 'react'
import axios from "axios"

import { History } from "./history"
import { useOpenGraph } from '../hooks/useOpenGraph'

const Histories = ({ history, reloadData }) => {
  const [deleteHistory, setDeleteHistory] = useState(false)
  const [openGraph,loadHistory] = useOpenGraph(history.url)

  const handleDelete = async () => {
    setDeleteHistory(true)
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/delete-history`, {
        id: history._id,
      })
      .then(reloadData)
  }

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

  let HistoryClass = [
    history.read ? "activeRead" : "",
    deleteHistory ? "deleteHistory" : "",
    !loadHistory ? "createHistory" : "",
  ].join(" ")

  return (
    <History
      HistoryClass={HistoryClass}
      loadHistory={loadHistory}
      openGraph={openGraph}
      history={history}
      handleRead={handleRead}
      handleDelete={handleDelete}
    />
  )
}

export default Histories
