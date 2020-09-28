import  {useState,useEffect} from 'react'
import axios from "axios"

export const useOpenGraph =(url) => {
  const [openGraph, setOpenGraph] = useState(null)
  const [loadHistory, setLoadHistory] = useState(true)

  useEffect(() => {
    let time = null
    axios
      .get(`${process.env.GATSBY_URL_API_OPG}/?ogUrl=${url}`)
      .then(response => {
        time = setTimeout(() => {
          setOpenGraph(response.data)
          setLoadHistory(false)
        }, 1500)
      })
    return () => {
      clearTimeout(time)
    }
  }, [url])


  return [openGraph,loadHistory]

}