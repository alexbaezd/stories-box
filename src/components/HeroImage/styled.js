import styled from "styled-components"
import img from "../../images/bg.jpg"

export const Background = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(
      ellipse at center,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 40%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${img}) no-repeat center center scroll;
  left: 0;
  /* position: absolute;
  margin: 0;
  left: 0;
  top: 10px; */
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 9vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 43px;
`
export const AuthButton = styled.button`
  background: #2a9d8f;
  transition: all ease 0.25s;
  border-radius: 6px;
  display: inline-block;
  border: none;
  padding: 0.75rem 1.5rem;
  margin: 0;
  text-decoration: none;
  color: #ffffff;
  font-size: 1.2rem;
  cursor: pointer;
  text-align: center;
  -webkit-appearance: none;
  -moz-appearance: none;
  font-weight: bold;

  :hover {
    background: #098191;
    transform: translateY(-5px);
  }
  :focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
  }
`
