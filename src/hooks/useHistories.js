import {useState,useEffect} from "react"
import axios from "axios"

export const useHistories = () =>{
    const [status, setStatus] = useState("loading")
    const [histories, setHistories] = useState(null)

    useEffect(() => {
      let canceled = false
      if (status !== "loading") return
      
      axios(`${process.env.GATSBY_URL_FUNCTIONS}/get-histories`).then(
        result => {
          if (canceled === true) return

          if (result.status !== 200) {
            console.error("Error Loading", "\n", result)
            return
          }

          const sortData = result.data.histories.sort((a, b) =>
            a.read === b.read ? 0 : a.read ? 1 : -1
          )
          setHistories(sortData)
          setStatus("loaded")
        }
      )

      return () => {
        canceled = true
      }
    }, [status])

    return [histories,setStatus]
}