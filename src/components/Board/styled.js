import styled from "styled-components"

export const BoardContainer = styled.div`
  padding: 0 4rem 2rem;
  margin: 0 auto;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-auto-columns: 33%;
  gap: 1rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  @media (max-width: 1400px) {
    grid-auto-columns: 35%;
    gap: 2.5rem;
  }
  @media (max-width: 1112px) {
    grid-auto-columns: 45%;
  }
  @media (max-width: 1024px) {
    grid-auto-columns: 50%;
  }
  @media (max-width: 960px) {
    grid-auto-columns: 55%;
  }
  @media (max-width: 760px) {
    grid-auto-columns: 75%;
  }

  @media (max-width: 640px) {
    grid-auto-columns: 89%;
  }
  @media (max-width: 414px) {
    grid-auto-columns: 92%;
    gap: 4.6rem;
  }
  @media (max-width: 375px) {
    grid-auto-columns: 100%;
    gap: 5.8rem;
  }
  @media (max-width: 320px) {
    grid-auto-columns: 100%;
    gap: 8.9rem;
  }
`
export const BoardColumnWrapper = styled.div`
  width: clamp(277px, 60vw, 420px);
  scroll-snap-align: start;
  scroll-snap-stop: always;
  margin-right: 1.5rem;
`
export const BoardColumn = styled.div`
  /* width: clamp(277px, 60vw, 420px);*/
  /**TEST 100vh => auto + padding bottom  */
  height: auto;
  min-height: 80vh;
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.3);

  border-top: ${props =>
    props.borderColor === 0
      ? "8px solid #e6496b"
      : props.borderColor === 1
      ? "8px solid #457b9d"
      : "8px solid #2a9d8f"};
`
export const BoardColumnH2 = styled.h2`
  text-align: center;
  margin-bottom: 0.5rem;
`
