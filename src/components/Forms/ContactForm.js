import React, { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"

import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa"

import Button from "../Button"
import SpinnerIcon from "../SpinnerIcon"

const emailAddress = graphql`
  {
    site {
      siteMetadata {
        siteEmail: email
      }
    }
  }
`

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

export default () => {
  const [submitted, setSubmitted] = useState(false)
  const [accepted, setAccepted] = useState(false)

  const {
    site: {
      siteMetadata: { siteEmail },
    },
  } = useStaticQuery(emailAddress)

  return (
    <Formik
      initialValues={{
        name: "Andrew",
        email: "andrew@citynorth.church",
        message: "Hi! This is a test email.",
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetch(
            "/.netlify/functions/contact-submission",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...values,
                siteEmail: siteEmail,
                formName: "Contact Us",
              }),
            }
          )
          const data = await response.json()
          if (response.ok) {
            setAccepted(true)
          } else {
            setAccepted(false)
            throw data.msg
          }
        } catch (err) {
          console.log(err)
        }
        setSubmitted(true)
        setTimeout(() => {
          if (accepted) resetForm()
          setSubmitting(false)
        }, 2000)
        setTimeout(() => {
          setSubmitted(false)
        }, 5000)
      }}
    >
      {({ isSubmitting, errors }) => (
        <StyledForm
        // className={className}
        >
          <FieldWrapper>
            <StyledField
              type="name"
              name="name"
              placeholder="Name"
              error={errors.name}
              // className={className}
              aria-label="name"
            />
            <StyledErrorMessage
              name="name"
              component="div"
              // className={className}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledField
              type="email"
              name="email"
              placeholder="Email"
              error={errors.email}
              // className={className}
              aria-label="email"
            />
            <StyledErrorMessage
              name="email"
              component="div"
              // className={className}
            />
          </FieldWrapper>
          <FieldWrapper>
            <StyledField
              name="message"
              component="textarea"
              placeholder="Message..."
              rows="5"
              error={errors.message}
              // className={className}
              aria-label="message"
            ></StyledField>
            <StyledErrorMessage
              name="message"
              component="div"
              // className={className}
            />
          </FieldWrapper>
          <StyledButton
            type="submit"
            disabled={isSubmitting}
            // className={className}
          >
            {isSubmitting && <SpinnerIcon margin="0 1rem 0 0" top="2px" />}
            {isSubmitting ? `Sending` : `Send Message`}
          </StyledButton>
          {submitted && (
            <SubmitMessage>
              <Icon
                as={accepted ? FaRegCheckCircle : FaRegTimesCircle}
                accepted={accepted}
              />
              <h4>
                {accepted
                  ? `Message sent successfully!`
                  : `Message submission failed. Please try again.`}
              </h4>
            </SubmitMessage>
          )}
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
  grid-gap: 0.75em;
  font-size: 0.9rem;
  position: relative;
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
  border: ${props =>
    props.error ? "2px solid tomato" : "2px solid var(--primaryLight)"};
  border-radius: 16px;
  background: transparent;
  transition: all 0.3s ease;
  &:focus {
    border: 2px solid var(--primary);
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
  border: 2px solid var(--primary);
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover,
  &:focus {
    transform: scale(1.05);
    background: none;
    color: var(--primary);
  }
  &:disabled {
    opacity: 0.9;
    cursor: default;
  }
`

const SubmitMessage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 500;
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
  opacity: 0;
  background: var(--lightGray);
  animation: fade 5s;
  @keyframes fade {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`

const Icon = styled.svg`
  display: block;
  font-size: 10rem;
  color: ${props => (props.accepted ? "var(--green)" : "red")};
`
