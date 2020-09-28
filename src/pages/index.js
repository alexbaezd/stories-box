import React from "react"
import styled from "styled-components"

import Form from "../components/formAddHistory";
import Histories from "../components/histories"
import Layout from "../components/layout"
import SEO from "../components/seo"

import { useHistories } from "../hooks/useHistories";

const HistoriesGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(1,1fr);
  gap:0.5rem;
`

const IndexPage = () =>{

  const [histories,setStatus] = useHistories();
  const reloadData = () => setStatus("loading")

  return (
    <Layout>
      <SEO title="Home" />
      <Form reloadData={reloadData} />
      {histories ? (
        <HistoriesGroup>
          {histories.map(history => (
            <Histories
              key={history._id}
              history={history}
              reloadData={reloadData}
            />
          ))}
        </HistoriesGroup>
      ) : (
        <p>Loading ......</p>
      )}
    </Layout>
  )
}

export default IndexPage
