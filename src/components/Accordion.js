import React from "react"
import styled from "styled-components"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemButton,
} from "react-accessible-accordion"

export default ({ questions }) => {
  return (
    <StyledAccordion allowZeroExpanded={true}>
      {questions.map((question, index) => {
        return (
          <StyledAccordionItem key={index}>
            <AccordionItemHeading>
              <Question>{question.question}</Question>
            </AccordionItemHeading>
            <Answer>{question.answer}</Answer>
          </StyledAccordionItem>
        )
      })}
    </StyledAccordion>
  )
}

const StyledAccordion = styled(Accordion)`
  width: 100%;
  max-width: 600px;
`

const Question = styled(AccordionItemButton)`
  padding: 1rem 2rem;
  background: transparent;
  display: flex;
  align-items: center;
  transition: all 0.3s;
  z-index: 5;
  outline: none;
  &::before {
    content: "";
    position: relative;
    left: -0.25rem;
    height: 0.5rem;
    width: 0.5rem;
    border: 1px solid var(--blue);
    border-top: none;
    border-left: none;
    transform: rotate(-45deg);
    margin-right: 0.6rem;
    transition: var(--mainTransition);
  }
  &[aria-expanded="true"]::before,
  &[aria-selected="true"]::before {
    transform: rotate(45deg);
  }
  &:hover {
    cursor: pointer;
    border: 2px solid var(--primary);
  }
  &:focus {
    border: 2px solid var(--primary);
  }
`

const StyledAccordionItem = styled(AccordionItem)`
  width: 100%;
  height: auto;
  margin: 0.5rem 0 0.5rem 0;
  border: 2px solid var(--primaryLight);
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  background: var(--primaryLight);
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto auto;
  transition: all 0.3s;
  ${Question}:hover {
    background: var(--primary);
  }
  ${Question}:focus {
    background: var(--primary);
  }
`

const Answer = styled(AccordionItemPanel)`
  padding: 1rem 2rem;
  transition: all 0.3s;
`
