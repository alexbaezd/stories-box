import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"
import React, { useState } from "react"
import {
  AuthButton,
  AuthPicture,
  DropdownItem,
  DropdownItemLink,
  DropdownMenu,
  IconButton,
  IconMenu,
  Navbar,
  NavbarNav,
  NavItem,
} from "./styled"

const NavBar = ({ title }) => {
  const [open, setOpen] = useState(false)

  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    isLoading,
    user,
  } = useAuth0()

  if (isLoading) return null

  return (
    <Navbar>
      <h1 style={{ margin: 0, textAlign: `center` }}>
        <Link
          to="/"
          style={{
            color: `#2d4059`,
            textDecoration: `none`,
          }}
        >
          {title}
        </Link>
      </h1>
      <NavbarNav>
        {isAuthenticated ? (
          <NavItem>
            <IconButton onClick={() => setOpen(!open)}>
              <AuthPicture
                src={user.picture}
                alt={`Picture Profile - ${user.nickname}`}
              />
              <IconMenu viewBox="0 0 320 512" isOpen={open}>
                <path
                  fill={open ? "#2a9d8f" : "#6b6767"}
                  d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
                ></path>
              </IconMenu>
            </IconButton>
            {open && (
              <DropdownMenu onMouseLeave={() => setOpen(false)}>
                <DropdownItemLink to="/app">Stories</DropdownItemLink>
                <DropdownItemLink to="/profile">My Profile</DropdownItemLink>
                <DropdownItem
                  href="#"
                  onClick={() => {
                    logout({ returnTo: window.location.origin })
                  }}
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            )}
          </NavItem>
        ) : (
          <NavItem>
            <AuthButton className="button-login" onClick={loginWithRedirect}>
              Login
            </AuthButton>
          </NavItem>
        )}
      </NavbarNav>
    </Navbar>
  )
}

export default NavBar
