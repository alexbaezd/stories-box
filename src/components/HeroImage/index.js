import React from "react"
import { AuthButton, Background, H1 } from "./styled"

const HeroImage = ({ loginWithRedirect }) => (
  <Background role="img" aria-label="Image Description">
    <H1>Ready To Save Your Links?</H1>
    <AuthButton onClick={loginWithRedirect}>Get Started</AuthButton>
  </Background>
)

export default HeroImage
