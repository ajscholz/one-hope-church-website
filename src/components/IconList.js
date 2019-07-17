import React from "react"
import styled from "styled-components"

import { FaCheck } from "react-icons/fa"

export default ({ children }) => {
  console.log(children)
  return (
    <List>
      {children.map((child, index) => (
        <ListItem key={index}>
          <Icon as={FaCheck} />
          <Text>{child}</Text>
        </ListItem>
      ))}
    </List>
  )
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 2rem;
`

const ListItem = styled.li`
  position: relative;
  display: flex;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
`

const Icon = styled.i`
  display: block;
  align-self: center;
  margin-right: 10px;
`

const Text = styled.span`
  flex-shrink: 1;
  line-height: 1.25;
`
