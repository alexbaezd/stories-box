import axios from "axios"
import { useEffect, useReducer, useRef, useState } from "react"

export const useFetch = url => {
  const cache = useRef({})
  const [reload, setReload] = useState("loading")

  const initialState = {
    status: "idle",
    error: null,
    data: [],
  }

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "FETCHING":
        return { ...initialState, status: "fetching" }
      case "FETCHED":
        return { ...initialState, status: "fetched", data: action.payload }
      case "FETCH_ERROR":
        return { ...initialState, status: "error", error: action.payload }
      default:
        return state
    }
  }, initialState)

  useEffect(() => {
    let cancelRequest = false
    if (!url) return

    const fetchData = async () => {
      if (reload !== "loading") return

      dispatch({ type: "FETCHING" })
      //if (cache.current[url])

      if (reload === "loading") {
        try {
          const response = await axios.get(
            `${process.env.GATSBY_URL_FUNCTIONS}/get-stories-by-user`,
            {
              params: { userID: url },
            }
          )
          const data = await response.data.stories
          cache.current[url] = data
          if (cancelRequest) return
          dispatch({ type: "FETCHED", payload: data })
          setReload("loaded")
        } catch (error) {
          if (cancelRequest) return
          dispatch({ type: "FETCH_ERROR", payload: error.message })
        }
      } else {
        const data = cache.current[url]
        dispatch({ type: "FETCHED", payload: data })
        setReload("loaded")
      }
    }

    fetchData()

    return function cleanup() {
      cancelRequest = true
    }
  }, [url, reload])

  return [state, reload, setReload]
}
