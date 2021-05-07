import React from "react"
import FakeAPi from "../../content/data.json"
import {
  Description,
  Information,
  Picture,
  SectionService,
  Service,
  Title,
  Wrapper,
} from "./styled"

const Features = () => (
  <SectionService>
    {FakeAPi.data.map((service, index) => {
      const isBlue = index % 2 === 0 ? true : false

      return (
        <Service key={service.id} blue={isBlue}>
          <Wrapper blue={isBlue}>
            <Information>
              <Title>{service.title}</Title>
              <Description>{service.description}</Description>
            </Information>
            <Picture
              src={require(`../../images/${service.image}`).default}
              alt={service.title}
            />
          </Wrapper>
        </Service>
      )
    })}
  </SectionService>
)

export default Features
