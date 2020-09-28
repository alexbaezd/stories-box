import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  color: #e6496b;
  & a {
    color:#e6496b;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `7rem 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
        <Footer>
          © {new Date().getFullYear()}
          <a href="https://alexbaez.dev/" target="_blank" rel="noreferrer">
            Alex Báez
          </a>
        </Footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
