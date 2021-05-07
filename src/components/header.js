import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import NavBar from "./Navbar"

const HeaderContainer = styled.header`
  background: white;
  margin-bottom: 1.45rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  z-index: 2;
`

const Header = ({ siteTitle }) => {
  return (
    <HeaderContainer>
      <NavBar title={siteTitle} />
    </HeaderContainer>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
