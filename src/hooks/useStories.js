import { useEffect, useState } from "react"
import { COLUMN_READ, COLUMN_READING, COLUMN_TO_READ } from "../utils/dnd"
import { useFetch } from "./useFetch"

const filterColumnsByStatusRead = result => {
  const filteredColumnToRead = result.filter(
    item => item.columnIndex === COLUMN_TO_READ
  )
  const filteredColumnReading = result.filter(
    item => item.columnIndex === COLUMN_READING
  )
  const filteredColumnRead = result.filter(
    item => item.columnIndex === COLUMN_READ
  )

  return [filteredColumnToRead, filteredColumnReading, filteredColumnRead]
}

export const useStories = userID => {
  const [{ status, data }, reload, setReload] = useFetch(userID)
  const [columns, setColumns] = useState(null)

  useEffect(() => {
    let canceled = false

    if (status === "fetched" && data.length !== 0) {
      setColumns(filterColumnsByStatusRead(data))
    }
    if (status === "fetched" && data.length === 0) {
      setColumns([[], [], []])
    }

    if (canceled === true) return

    return () => {
      canceled = true
    }
  }, [status, data])

  return [reload, setReload, columns, setColumns]
}
