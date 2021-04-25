import {useState,useEffect} from "react"
import axios from "axios"

export const useStories = () =>{
    const [status, setStatus] = useState("loading")
    //FIXME: 2 VECES ? , REDUCELO A SOLO UN STATE
    //const [stories, setStories] = useState(null)
    const [columns, setColumns] = useState(null)
    
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
          //setStories(sortData)
          setStatus("loaded")
          setColumns({
            "1-por-leer": {
              name: "Por Leer",
              items: sortData,
            },
            "2-leyendo": {
              name: "Leyendo",
              items: [],
            },
            "3-leido": {
              name: "Hecho",
              items: [],
            },
          })
          
        }
      )

      return () => {
        canceled = true
      }
    }, [status,columns])

    return [setStatus,columns, setColumns]
}