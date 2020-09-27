import axios from "axios";
import React, {useState,useEffect} from "react"
import styled from "styled-components"
import Form from "../components/formAddHistory";


import History from "../components/history";
import Layout from "../components/layout"
import SEO from "../components/seo"


const HistoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap:0.5rem;
`


const IndexPage = () =>{

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

    const reloadData = () => setStatus("loading")
  return (
    <Layout>
      <SEO title="Home" />
      <h1>{process.env.GATSBY_URL_FUNCTIONS}</h1>
      <Form reloadData={reloadData} />
      {histories ? (
        <HistoriesGroup>
          {histories.map(history => (
            <History
              key={history._id}
              history={history}
              reloadData={reloadData}
            />
          ))}
        </HistoriesGroup>
      ) : (
        /*TODO: add component with animation*/
        <p>Loading ......</p>
      )}
    </Layout>
  )
}

export default IndexPage
