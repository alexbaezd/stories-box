import axios from "axios"
import React, { useState } from "react"
import { Story } from "./Story"

const Stories = ({ story, reloadData }) => {
  const [deleteStory, setDeleteStory] = useState(false)

  const handleDelete = async () => {
    setDeleteStory(true)
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/delete-story`, {
        id: story._id,
      })
      .then(reloadData)
  }

  const handleRead = async () => {
    const { _id, userID, title, url, read, image, description, note } = story
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/isread`, {
        id: _id,
        userID,
        title,
        url,
        read: !read,
        image,
        description,
        note,
        columnIndex: read === true ? 0 : 2,
      })
      .then(reloadData)
  }

  let StoryClass = [
    story.read ? "activeRead" : "",
    deleteStory ? "deleteStory" : "",
  ].join(" ")

  return (
    <Story
      StoryClass={StoryClass}
      story={story}
      handleRead={handleRead}
      handleDelete={handleDelete}
    />
  )
}

export default React.memo(Stories)
