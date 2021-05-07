import PropTypes from "prop-types"
import React from "react"
import { ButtonPrimary, SectionCTA, Title } from "./styled"

const CallToAction = ({ title, buttonText, handleClick }) => {
  return (
    <SectionCTA>
      <Title>{title}</Title>
      <ButtonPrimary onClick={handleClick}>{buttonText}</ButtonPrimary>
    </SectionCTA>
  )
}

CallToAction.defaultProps = {
  buttonText: `Click Me`,
}

CallToAction.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
}
export default CallToAction
