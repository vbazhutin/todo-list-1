import React, { useState } from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import { useLocation } from 'react-router-dom'
import * as Yup from 'yup'

import { Options } from './Options'

export const Login = () => {
  const location = useLocation()
  const [forgotMode, setForgotMode] = useState(true)
  const [loginMode, setLoginMode] = useState(location.search.slice(1) === "login")

  const AccHandler = (event) => {
    const text = event.target.innerText
    if (text.includes('Create')) {
      setLoginMode(prevLogin => !prevLogin)
    } else {(text.includes('Forgot'))
      setForgotMode(prev => !prev)
    }
  }

  return (
    <section className="box center section">
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
          name: Yup.string().required("Name is required"),
          email: Yup.string().email("Valid email required").required("Email is required"),
          pass: Yup.string().min(6).required("Password is required")
        })}
        onSubmit={(values, { setSubmitting }) => {
          // This is like utility fxn. that gathers all values
          console.log("submission", values)
          setSubmitting(false)
        }}
      >
        <Form className="box">
          {!loginMode ? (
            <div className="field">
              <label htmlFor="name">Name</label>
              <div className="control">
                <Field name="name" type="text" />
                <p className="help is-danger">
                  <ErrorMessage name="name" />
                </p>
              </div>
            </div>
          ) : null}

          <div className="field">
            <label htmlFor="email">Email</label>
            <div className="control">
              <Field name="email" type="email" />
              <p className="help is-danger">
                <ErrorMessage name="email" />
              </p>
            </div>
          </div>

          {!forgotMode ? (
            <div className="field">
              <label htmlFor="pass">Password</label>
              <div className="control">
                <Field name="pass" type="password" />
                <p className="help is-danger">
                  <ErrorMessage name="pass" />
                </p>
              </div>
            </div>
          ) : null}


          <button>Submit</button>
        </Form>
      </Formik>
      <Options loginMode={loginMode} forgotMode={forgotMode} AccHandler={AccHandler} />
    </section>
  )
}
