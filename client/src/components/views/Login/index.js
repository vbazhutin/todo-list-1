import React, { useState } from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import auth from 'auth'

import { Options } from './Options'

export const Login = () => {
  const location = useLocation()
  const [forgotMode, setForgotMode] = useState(false)
  const [loginMode, setLoginMode] = useState(location.search.includes("login"))

  const AccHandler = (event) => {
    const text = event.target.innerText
    if (text.includes('Forgot')) {
      setForgotMode(prev => !prev)

    } else {
      setForgotMode(false)
      setLoginMode(prevLogin => !prevLogin)
    }
  }

  return (
    <section className="box center mt-4 section">
      <h2 className="has-text-centered title">
        {loginMode ? "Login" : "Create account"}
      </h2>
      <Formik
        initialValues={{
          email: "",
          name: "",
          pass: "",
        }}
        validationSchema={Yup.object({
          name: !loginMode && Yup.string().required("Name is required"),
          email: Yup.string().email("Valid email required").required("Email is required"),
          pass: !forgotMode && Yup.string().min(6).required("Password is required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          // This is like utility fxn. that gathers all values
          console.log("submission", values)
          setSubmitting(false)
        }}
      >
        <Form>
          {!loginMode ? (
            <div className="field">
              <label htmlFor="name" className="ml-2">Name</label>
              <div className="control mx-2 my-1">
                <Field name="name" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>
          ) : null}

          <div className="field">
            <label htmlFor="email" className="ml-2">Email</label>
            <div className="control mx-2 my-1">
              <Field name="email" type="email" />
              <p className="help is-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          {!forgotMode ? (
            <div className="field">
              <label htmlFor="pass" className="ml-2">Password</label>
              <div className="control mx-2 my-1">
                <Field name="pass" type="password" />
                <p className="help is-danger">
                  <ErrorMessage name="pass" />
                </p>
              </div>
            </div>
          ) : null}


          <button type="submit" className="button is-success ml-2 mt-2">Submit</button>
        </Form>
      </Formik>
      <Options loginMode={loginMode} forgotMode={forgotMode} AccHandler={AccHandler} />
    </section>
  )
}
