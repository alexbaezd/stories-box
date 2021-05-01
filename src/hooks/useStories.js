import axios from "axios"
import { useEffect, useState } from "react"

const getRequestData = (canceled, userID) => {
  console.log("****userID*****", userID)
  let data = axios
    .get(`${process.env.GATSBY_URL_FUNCTIONS}/get-stories-by-user`, {
      params: { userID },
    })
    .then(result => {
      if (canceled === true) return

      if (result.status !== 200) {
        console.error("Error Loading", "\n", result)
        return
      }

      const sortData = result.data.stories.sort((a, b) =>
        a.read === b.read ? 0 : a.read ? 1 : -1
      )

      return sortData
    })

  return data
}

export const useStories = userID => {
  const [status, setStatus] = useState("loading")
  const [columns, setColumns] = useState(null)

  useEffect(() => {
    let canceled = false

    if (status !== "loading") return

    getRequestData(canceled, userID).then(result => {
      console.log("==================RESULT===================")
      console.log(result)

      const filteredColumn0 = result.filter(item => item.columnIndex === 0)
      const filteredColumn1 = result.filter(item => item.columnIndex === 1)
      const filteredColumn2 = result.filter(item => item.columnIndex === 2)
      console.log("==================FILTER===================")
      console.log("fill0", filteredColumn0)
      console.log("fill1", filteredColumn1)
      console.log("fill2", filteredColumn2)
      console.log("==================FILTER===================")

      setColumns([filteredColumn0, filteredColumn1, filteredColumn2])
      setStatus("loaded")
      console.log("Call FaunaDB")
    })

    return () => {
      canceled = true
    }
  }, [status, columns, userID])

  return [status, setStatus, columns, setColumns]
}
