import React from "react"
import styled from "styled-components"

import social from "../utils/social"

export default () => {
  return (
    <SocialIcons>
      {social.map(item => {
        return (
          <LinkWrapper
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            key={item.name}
            aria-label={item.name}
          >
            <Icon as={item.icon} alt={item.name} />
          </LinkWrapper>
        )
      })}
    </SocialIcons>
  )
}

const SocialIcons = styled.div`
  display: flex;
`

const LinkWrapper = styled.a`
  border: 2px solid var(--primary);
  border-radius: 50%;
  color: var(--primary);
  padding: 0.5rem;
  margin: 0 0.5rem;
  background: transparent;
  transition: var(--mainTransition);
  &:hover,
  &:focus {
    border-color: var(--primaryLight);
    color: var(--primaryLight);
    transform: scale(1.05);
  }
`

const Icon = styled.div`
  display: block;
  font-size: 1rem;
`
