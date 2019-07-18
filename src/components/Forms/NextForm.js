import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import styled from "styled-components"
import Select from "react-select"

import Button from "../Button"

const languageOptions = [
  { value: "English", label: "English" },
  { value: "Spanish", label: "Spanish" },
  { value: "Portugese", label: "Portugese" },
]

const attendanceOptions = [
  { value: "Spring", label: "Spring" },
  { value: "Summer", label: "Summer" },
  { value: "Fall", label: "Fall" },
  { value: "Winter", label: "Winter" },
]

// Yup validation schema for formik form
const ContactSchema = Yup.object().shape({
  name: Yup.string().required("*Required"),
  email: Yup.string()
    .email("*Invalid email")
    .required("*Required"),
  phone: Yup.string().required("*Required"),
  language: Yup.string().required(),
  session: Yup.string().required(),
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
      {({
        errors,
        isSubmitting,
        values,
        setFieldTouched,
        setFieldValue,
        handleSubmit,
      }) => (
        <StyledForm
          className={className}
          onSubmit={e => {
            handleSubmit(e)
          }}
        >
          <FieldWrapper>
            <StyledField
              type="text"
              name="name"
              placeholder="Name"
              error={errors.name}
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
              type="email"
              name="email"
              placeholder="Email"
              error={errors.email}
              className={className}
              aria-label="email"
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
              aria-label="phone"
            />
            <StyledErrorMessage
              name="phone"
              component="div"
              className={className}
            />
          </FieldWrapper>
          <SelectWrapper>
            <Select
              isSearchable={false}
              onBlur={() => setFieldTouched("parameter", true)}
              onChange={value => setFieldValue("language", value.value)}
              name="language"
              placeholder="Which Language?"
              className={className}
              options={languageOptions}
              value={values.parameter}
              classNamePrefix="select"
              styles={customStyles}
              error={errors.language}
              aria-label="preferred language"
            />
            <Select
              isSearchable={false}
              hasValue={false}
              onBlur={() => setFieldTouched("parameter", true)}
              onChange={value => setFieldValue("session", value.value)}
              name="session"
              placeholder="Which Session?"
              className={className}
              options={attendanceOptions}
              value={values.parameter}
              styles={customStyles}
              error={errors.session}
              aria-label="preferred session"
            ></Select>
          </SelectWrapper>

          <StyledButton
            type="submit"
            disabled={
              errors.name ||
              errors.email ||
              errors.phone ||
              errors.language ||
              errors.session ||
              values.language === null ||
              values.session === null ||
              isSubmitting
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
  grid-template-rows: repeat(5, auto);
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

const SelectWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 500px) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }
`

const StyledButton = styled(Button)`
  outline: none;
  width: 100%;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid var(--primary);
  margin-top: 1.5rem;
  &:hover,
  &:focus {
    background: none;
    color: var(--primary);
  }
  &:disabled {
    background: var(--primaryLight);
    border: 2px solid var(--primaryLight);
    color: white;
    cursor: unset;
  }
`

// Below styles are for react-select component
const customStyles = {
  container: provided => ({
    width: "80%",
    marginBottom: ".75em",
    ...provided,
    "@media(min-width: 500px)": {
      width: "47.5%",
      marginBottom: 0,
    },
  }),
  control: (provided, props) => ({
    ...provided,
    borderColor: props.error ? "tomato" : "var(--primaryLight)",
    borderStyle: "solid",
    borderWidth: "2px",
    borderRadius: "16px",
    padding: "0.5em 0.8em",
    outline: "none",
    transition: "var(--mainTransition)",
    minHeight: "unset",
    cursor: "pointer",
    boxShadow: "none !important",
    "&:hover": {
      borderColor: "var(--primary)",
      borderStyle: "solid",
      borderWidth: "2px",
    },
    "&:active": {
      borderColor: "var(--primary)",
      borderStyle: "solid",
      borderWidth: "2px",
    },
  }),
  valueContainer: provided => ({
    ...provided,
    padding: "0",
  }),
  indicatorsContainer: provided => ({
    ...provided,
  }),
  indicatorSeparator: provided => ({
    ...provided,
    backgroundColor: "var(--primaryLight)",
    marginBottom: "2px",
    marginTop: "2px",
    marginRight: ".5em",
    display: "none",
  }),
  dropdownIndicator: (provided, props) => ({
    ...provided,
    padding: 0,
    transition: "var(--mainTransition)",
    color: "var(--primaryLight)",
    transform: props.selectProps.menuIsOpen ? "rotate(180deg)" : null,
    "&:hover": {
      color: "var(--primary)",
    },
    "&>svg": {
      margin: "-1.5px 0", // fixes height issue to make all form fields the same
    },
  }),
  input: provided => ({
    ...provided,
    padding: 0,
    margin: 0,
  }),
  menu: provided => ({
    ...provided,
    borderColor: "var(--blue)",
    borderWidth: "2px",
    borderRadius: "16px",
    marginTop: "4px",
    overflow: "hidden",
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected
      ? "var(--primary)"
      : state.isFocused
      ? "var(--primaryLight)"
      : "white",
    color: "var(--blue)",
    paddingLeft: "1em",
  }),
}
