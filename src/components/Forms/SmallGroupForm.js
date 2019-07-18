import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

import Button from "../Button"

// Yup validation schema for formik form
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("*Required"),
  phone: Yup.string().required("*Required"),
  email: Yup.string()
    .email("*Invalid email")
    .required("*Required"),
})

export default ({ className }) => {
  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        email: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        alert(values)
        // try {
        //   const response = await fetch(
        //     "/.netlify/functions/contact-submission",
        //     // "https://hook.integromat.com/wj3q5rp7edvkvb1im0bbnwsrcbxxsb9p",
        //     {
        //       method: "POST",
        //       headers: {
        //         "Content-Type": "application/json",
        //       },
        //       body: JSON.stringify({
        //         values,
        //       }),
        //     }
        //   )
        //   if (response.status === 200) {
        //     alert("Form Submission Successful!")
        //     resetForm()
        //   }
        // } catch (error) {
        //   alert("There was an error. Please try again.")
        //   setSubmitting(false)
        // }
      }}
      render={props => (
        <StyledForm
          className={className}
          method="post"
          onSubmit={e => {
            e.preventDefault()
            props.handleSubmit(e)
          }}
        >
          <FieldWrapper>
            <StyledField
              type="text"
              name="name"
              placeholder="Name"
              error={props.errors.name}
              className={className}
              aria-label="name"
            />
            <StyledErrorMessage
              name="name"
              component="div"
              className={className}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledField
              type="text"
              name="phone"
              placeholder="Phone"
              error={props.errors.phone}
              className={className}
              aria-label="phone"
            />
            <StyledErrorMessage
              name="phone"
              component="div"
              className={className}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              error={props.errors.email}
              className={className}
              aria-label="email"
            />
            <StyledErrorMessage
              name="email"
              component="div"
              className={className}
            />
          </FieldWrapper>

          <StyledButton
            type="submit"
            disabled={
              props.errors.name ||
              props.errors.phone ||
              props.errors.email ||
              props.isSubmitting
            }
            className={className}
          >
            Sign up now
          </StyledButton>
        </StyledForm>
      )}
    />
  )
}

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(4, auto);
  grid-gap: 0.75em;
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
  resize: none;
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
`
