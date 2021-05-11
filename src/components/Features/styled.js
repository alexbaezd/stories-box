import styled from "styled-components"

export const SectionService = styled.section`
  margin: 0;
`
export const Service = styled.article`
  background: white;
`
export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: ${props => (props.blue ? "row" : "row-reverse")};
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem 0;
  margin-left: 1rem;
  margin-right: 1rem;
  flex-wrap: wrap-reverse;
  height: 55vh;
  @media (max-width: 768px) {
    height: auto;
  }
`
export const Information = styled.article`
  max-width: 450px;
`

export const Title = styled.h2`
  font-size: 4vmin;
  text-align: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    text-align: left;
  }
`

export const Description = styled.p`
  line-height: 1.5;
  text-align: center;

  @media (max-width: 768px) {
    text-align: justify;
  }
`
export const Picture = styled.img`
  width: 390px;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 260px;
  }
  @media (max-width: 375px) {
    width: 70%;
  }
`
