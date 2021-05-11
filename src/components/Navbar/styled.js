import { Link } from "gatsby"
import styled from "styled-components"

export const Navbar = styled.nav`
  margin: 0 auto;
  max-width: 960px;
  height: 60px;
  padding: 0.5rem 1.0875rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NavbarNav = styled.ul`
  height: 100%;
  display: flex;
  justify-content: flex-end;
`
export const NavItem = styled.li`
  list-style: none;
  align-self: center;
  margin-right: 0.5rem;
`
export const AuthPicture = styled.img`
  width: calc(60px * 0.7);
  border-radius: 50%;
  margin-bottom: 0;
  transition: all 0.3s;
  :hover {
    border: 2px solid #2a9d8f;
  }
`
export const IconButton = styled.button`
  width: 120px;
  height: calc(60px * 0.9);
  background: none;
  border: none;
  padding: 5px;
  margin: 2px;
  cursor: pointer;
  transition: filter 300ms;

  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    filter: brightness(1.1);
  }
`
export const IconMenu = styled.svg`
  width: 20px;
  height: 20px;
  transition: transform 300ms;
  transform: ${props => (props.isOpen ? "rotateX(180deg)" : "rotateX(0deg)")};
`
export const DropdownMenu = styled.div`
  position: absolute;
  top: 58px;
  width: 220px;
  transform: translateX(-45%);
  background-color: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  border: 1px solid #2a9d8f;
  border-radius: 3px;
  padding: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const DropdownItemLink = styled(Link)`
  color: black;
  font-weight: bold;
  height: 50px;
  transition: background 500ms;
  padding: 0.5rem;
  border-radius: 4px;
  :hover {
    background-color: #e9ecef;
    color: #2a9d8f;
  }
`
export const DropdownItem = styled.a`
  color: #e6496b;
  font-weight: bold;
  height: 50px;
  border-radius: 4px;
  transition: background 500ms;
  padding: 0.5rem;
  :hover {
    background-color: #e9ecef;
    color: #2a9d8f;
  }
`

export const AuthButton = styled.button`
  border: none;
  background: none;
  border: 1px solid #2a9d8f;
  padding: 0.3rem 0.7rem;
  border-radius: 5px;
  cursor: pointer;
  color: #457b9d;
  font-weight: bold;
  font-size: 1.2rem;
  transition: all 0.4s ease-in-out;
  :hover {
    background: #2a9d8f;
    color: white;
  }
`
