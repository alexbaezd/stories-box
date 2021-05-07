import styled from "styled-components"

export const FormStory = styled.form`
  padding: 0.7rem 1rem;
  border-radius: 3px;
  display: grid;
  grid-template-columns: 40% 40% 20%;
  background: white;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.3);
  width: 700px;
  margin: 0 auto;
  align-items: end;
  margin-bottom: 2rem;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    padding: 0.9rem 1.4rem;
    width: 100%;
    align-items: center;
  }
`
export const FormStoryLabel = styled.label`
  color: #2d4059;
  font-weight: bold;
  margin-right: 1.5rem;
  @media (max-width: 640px) {
    width: 100%;
    margin-right: 0rem;
  }
`
export const FormStoryInput = styled.input`
  border: 1px solid #2a9d8f;
  border-radius: 4px;
  padding: 0.1rem;

  ::placeholder {
    font-weight: normal;
    opacity: 0.3;
  }
  @media (max-width: 640px) {
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0rem;
    width: 100%;
  }
`
export const FormStorySubmit = styled.button`
  cursor: pointer;
  color: #2d4059;
  border: 1px solid #6f90fc;
  background: transparent;
  padding: 0 1rem;
  font-weight: 400;
  border-radius: 5px;
  transition: all 0.3s;

  @media (max-width: 640px) {
    margin-top: 0.5rem;
    align-self: center;
    justify-self: end;
  }

  :hover {
    background: #2a9d8f;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
  }
`

export const ErrorMessage = styled.p`
  color: #e6496b;
  font-size: 0.8rem;
  font-style: italic;
  text-align: center;
  font-weight: normal;
  @media (max-width: 640px) {
    margin-top: -0.9rem;
  }
`
