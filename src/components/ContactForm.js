import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"

import Button from "./Button"

// Yup validation schema for formik form
const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "*Too Short!")
    .max(50, "*Too Long!")
    .required("*Required"),
  email: Yup.string()
    .email("*Invalid email")
    .required("*Required"),
  message: Yup.string()
    .min(10, "*Too Short!")
    .max(500, "*Too Long!")
    .required("*Required"),
})

export default ({ className }) => {
  return (
    <Formik
      initialValues={{
        name: "Andrew",
        email: "andrew@citynorth.church",
        message: "This is a test!",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting }) => {
        // alert(JSON.stringify(values, null, 2))
        setSubmitting(false)
        try {
          const response = await fetch(
            // "/.netlify/functions/contact-submission",
            "https://hook.integromat.com/wj3q5rp7edvkvb1im0bbnwsrcbxxsb9p",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                values,
              }),
            }
          )
          // const body = await JSON.parse(response.body)

          console.log(response.status === 200 ? "Message Accepted!" : "Error")
        } catch (error) {
          console.log(error)
        }
      }}
    >
      {({ errors, isSubmitting }) => (
        <StyledForm
          name="contact-form"
          className={className}
          method="post"
          data-netlify-honeypot="bot-field"
          data-netlify="true"
        >
          <BotField>
            Don’t fill this out if you're human: <input name="bot-field" />
          </BotField>
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
              name="message"
              component="textarea"
              placeholder="Message..."
              rows="5"
              error={errors.message}
              className={className}
            ></StyledField>
            <StyledErrorMessage
              name="message"
              component="div"
              className={className}
            />
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

  /* fixes weird pixel issue at bottom of textarea */
  &:nth-of-type(3) {
    height: calc(100% - 3px);
  }
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
  &:hover,
  &:focus {
    transform: scale(1.05);
    background: none;
    color: #f8820d;
  }
`

const BotField = styled.label`
  display: none;
`
