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
  background: var(--primaryLight);
  display: flex;
  align-items: center;
  z-index: 5;
  outline: none;
  border: 2px solid var(--primaryLight);
  border-radius: 24px;
  transition: var(--mainTransition);
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
    background: var(--primary);
    border: 2px solid var(--primary);
  }
  &:focus {
    background: var(--primary);
    border: 2px solid var(--primary);
  }
`

const StyledAccordionItem = styled(AccordionItem)`
  width: 100%;
  height: auto;
  margin: 0.5rem 0 0.5rem 0;
`

const Answer = styled(AccordionItemPanel)`
  font-size: 0.8rem;
  padding: 1rem 2rem;
  transition: all 0.3s;
  padding-left: 3.2rem;
`
