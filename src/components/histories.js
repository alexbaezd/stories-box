import React, {useEffect, useState} from 'react'
import axios from "axios"

import { History } from "./history"


const Histories = ({ history, reloadData, provided ,innerRef}) => {
  const [deleteHistory, setDeleteHistory] = useState(false)
  const [loadHistory, setLoadHistory] = useState(true)

  useEffect(() => {
    let time = setTimeout(() => {
      setLoadHistory(false)
    }, 1500)
    return () => {
      clearTimeout(time)
    }
  }, [])

  const handleDelete = async () => {
    setDeleteHistory(true)
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/delete-history`, {
        id: history._id,
      })
      .then(reloadData)
  }

  // FIXME: update to new Schema
  const handleRead = async () => {
    const { _id, title, url, read, image, description, note } = history
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/isread`, {
        id: _id,
        title,
        url,
        read: !read,
        image,
        description,
        note,
      })
      .then(reloadData)
  }

  let HistoryClass = [
    history.read ? "activeRead" : "",
    deleteHistory ? "deleteHistory" : "",
    loadHistory ? "createHistory" : "",
  ].join(" ")

  return (
    <History
      innerRef={innerRef}
      provided={provided}
      HistoryClass={HistoryClass}
      loadHistory={loadHistory} //FIXME:
      history={history}
      handleRead={handleRead}
      handleDelete={handleDelete}
    />
  )
}

export default Histories
