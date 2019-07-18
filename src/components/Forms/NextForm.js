import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

import Button from "../Button"

// Yup validation schema for formik form
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "*Too Short!")
    .max(50, "*Too Long!")
    .required("*Required"),
  email: Yup.string()
    .email("*Invalid email")
    .required("*Required"),
})

export default ({ className }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        language: "",
        session: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >
      {({ errors, isSubmitting, values }) => (
        <StyledForm className={className}>
          <FieldWrapper>
            <StyledField
              type="text"
              name="name"
              placeholder="Name"
              error={errors.name}
              className={className}
            />
            <StyledErrorMessage
              name="name"
              component="div"
              className={className}
            />
          </FieldWrapper>

          <FieldWrapper>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              error={errors.email}
              className={className}
            />
            <StyledErrorMessage
              name="email"
              component="div"
              className={className}
            />
          </FieldWrapper>

          <FieldWrapper>
            <StyledField
              type="tel"
              name="phone"
              placeholder="Phone: ex. 111-222-3333"
              error={errors.phone}
              className={className}
            />
            <StyledErrorMessage
              name="phone"
              component="div"
              className={className}
            />
          </FieldWrapper>
          <SelectWrapper>
            <SelectField
              name="language"
              placeholder="which language?"
              className={className}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>Portugese</option>
            </SelectField>
          </SelectWrapper>
          <FieldWrapper>
            <StyledField
              component="select"
              name="session"
              placeholder="Which session will you attend?"
              className={className}
            >
              <option>Spring</option>
              <option>Summer</option>
              <option>Fall</option>
              <option>Winter</option>
            </StyledField>
          </FieldWrapper>
          <StyledButton
            type="submit"
            disabled={
              errors.name || errors.email || errors.message || isSubmitting
            }
            className={className}
          >
            Submit
          </StyledButton>
        </StyledForm>
      )}
    </Formik>
  )
}

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-gap: 0.5em;
  font-size: 0.9rem;
`

const FieldWrapper = styled.div`
  position: relative;
  display: flex;
`

const StyledField = styled(Field)`
  outline: none;
  width: 100%;
  padding: 0.5em 0.8em;
  font-size: 1em;
  box-sizing: border-box;
  border: ${props => (props.error ? "2px solid tomato" : "2px solid #fccd9e")};
  border-radius: 16px;
  background: transparent;
  transition: all 0.3s ease;
  &:focus {
    border: 2px solid #f8820d;
  }
`

const StyledErrorMessage = styled(ErrorMessage)`
  position: absolute;
  bottom: 2px;
  right: 2px;
  border-radius: 16px;
  background: transparent;
  padding: 0.5em;
  font-size: 1em;
  color: tomato;
  box-sizing: border-box;
  justify-self: flex-end;
  align-self: flex-end;
`

const SelectWrapper = styled.div`
  /* position: relative;
  & > ${SelectField} {
    display: none;
  } */
`

const SelectField = styled.select``

const StyledButton = styled(Button)`
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid #f8820d;
  margin-top: 1.5rem;
  &:hover,
  &:focus {
    background: none;
    color: #f8820d;
  }
  &:disabled {
    background: var(--primaryLight);
    border: 2px solid var(--primaryLight);
    color: white;
    cursor: unset;
  }
`
