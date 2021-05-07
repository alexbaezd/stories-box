import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Header from "./header"
import "./layout.css"

const Footer = styled.footer`
  margin-top: 2rem;
  text-align: center;
  color: #e6496b;
  & a {
    color: #e6496b;
  }
`

const Layout = ({ children, isHomePage }) => {
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
      {isHomePage ? (
        <div
          style={{
            margin: `0 auto`,
            padding: `1rem .0075rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}{" "}
            <a href="https://alexbaez.dev/" target="_blank" rel="noreferrer">
              Alex Báez
            </a>
          </Footer>
        </div>
      ) : (
        <div
          style={{
            margin: `0 auto`,
            padding: `4.2rem 1.0875rem 1.45rem`,
          }}
        >
          <main>{children}</main>
          <Footer>
            © {new Date().getFullYear()}{" "}
            <a href="https://alexbaez.dev/" target="_blank" rel="noreferrer">
              Alex Báez
            </a>
          </Footer>
        </div>
      )}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
