import styled from "styled-components"

export const ButtonPrimary = styled.button`
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

export const SectionCTA = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 1.8rem;
  margin-left: 1.8rem;
  height: 50vh;
  @media (min-width: 768px) {
    padding: 2rem 0;
    height: 40vh;
  }
`
export const Title = styled.h2`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.4rem;

  @media (min-width: 768px) {
    margin-bottom: 1rem;
    font-size: 2rem;
  }
`
