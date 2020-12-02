import {useState,useEffect} from "react"
import axios from "axios"

export const useStories = () =>{
    const [status, setStatus] = useState("loading")
    const [stories, setStories] = useState(null)
    
    useEffect(() => {
      let canceled = false
      if (status !== "loading") return

      axios(`${process.env.GATSBY_URL_FUNCTIONS}/get-stories`).then(
        result => {
          if (canceled === true) return

          if (result.status !== 200) {
            console.error("Error Loading", "\n", result)
            return
          }

          const sortData = result.data.stories.sort((a, b) =>
            a.read === b.read ? 0 : a.read ? 1 : -1
          )
          setStories(sortData)
          setStatus("loaded")
        }
      )

      return () => {
        canceled = true
      }
    }, [status, stories])

    return [stories,setStories,setStatus]
}