import styled from "styled-components"

export const UserInfo = styled.section`
  width: 450px;
  margin: 0 auto;
  padding: 1rem;
  background-color: #457b9d;
  border-radius: 5px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 414px) {
    width: 280px;
    flex-direction: column;
  }
`
export const UserPicture = styled.img`
  border-radius: 50%;
  width: 120px;
  height: 120px;
  padding: 0.5rem;
`
export const UserDescription = styled.div`
  > p {
    margin-bottom: 0;
  }
`

export const UserDetails = styled.div`
  max-width: 960px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  gap: 1rem;
  opacity: 0.2;
`
