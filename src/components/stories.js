import React, {useEffect, useState} from 'react'
import axios from "axios"

import { Story } from "./story"


const Stories = ({ story, reloadData, provided ,innerRef}) => {
  const [deleteStory, setDeleteStory] = useState(false)
  const [loadStory, setLoadStory] = useState(true)

  useEffect(() => {
    let time = setTimeout(() => {
      setLoadStory(false)
    }, 1500)
    return () => {
      clearTimeout(time)
    }
  }, [])

  const handleDelete = async () => {
    setDeleteStory(true)
    await axios
      .post(`${process.env.GATSBY_URL_FUNCTIONS}/delete-story`, {
        id: story._id,
      })
      .then(reloadData)
  }

  // FIXME: update to new Schema
  const handleRead = async () => {
    const { _id, title, url, read, image, description, note } = story
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

  let StoryClass = [
    story.read ? "activeRead" : "",
    deleteStory ? "deleteStory" : "",
    loadStory ? "createStory" : "",
  ].join(" ")

  return (
    <Story
      innerRef={innerRef}
      provided={provided}
      StoryClass={StoryClass}
      loadStory={loadStory} //FIXME:
      story={story}
      handleRead={handleRead}
      handleDelete={handleDelete}
    />
  )
}

export default Stories
