import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { AuthButton, H1, HeroCTO, HeroWrapper } from "./styled"

const Hero = ({ loginWithRedirect }) => {
  return (
    <div
      style={{
        display: "grid",
      }}
    >
      <StaticImage
        style={{
          gridArea: "1/1",
          height: "100vh",
        }}
        layout="fullWidth"
        aspectRatio={16 / 9}
        placeholder="blurred"
        alt="Hero Image"
        src={"../../images/bg.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <HeroWrapper>
        <HeroCTO>
          <H1>Ready To Save Your Links?</H1>
          <AuthButton onClick={loginWithRedirect}>Get Started</AuthButton>
        </HeroCTO>
      </HeroWrapper>
    </div>
  )
}

export default Hero
