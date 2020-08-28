import React from "react"

import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup'

export const Login = () => (

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
    }
    }
  >
    <section className="section">
    <h2 className="h2">Login/Create Account</h2>
      <Form>
        <div className="field">
          <label htmlFor="name">Name</label>
          <div className="control">
            <Field name="name" type="text" />
            <p className="help is-danger">
              <ErrorMessage name="name" />
            </p>
          </div>
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <div className="control">
            <Field name="email" type="email" />
            <p className="help is-danger">
              <ErrorMessage name="email" />
            </p>
          </div>
        </div>

        <div className="field">
          <div className="control">
            <label htmlFor="pass">Password</label>
            <Field name="pass" type="password" />
            <p className="help is-danger">
              <ErrorMessage name="pass" />
            </p>
          </div>
        </div>

        <button>Submit</button>
      </Form>
    </section>
  </Formik>
)


//   return (
//   <form onSubmit={formik.handleSubmit}>
//     <label htmlFor="name">Name</label>
//     <input
//       type="text"
//       id="name"
//       {...formik.getFieldProps('name')}
//     />
//     {formik.touched.name && formik.errors.name ? (
//       <p>{formik.errors.name}</p>
//     ) : null}

//     <label htmlFor="email">Email</label>
//     <input
//       type="email"
//       id="email"
//       {...formik.getFieldProps('email')}
//     />
//     {formik.touched.email && formik.errors.email ? (
//       <p>{formik.errors.email}</p>
//     ) : null}

//     <label htmlFor="pass">Password</label>
//     <input
//       type="password"
//       id="pass"
//       {...formik.getFieldProps('pass')}
//     />
//     {formik.touched.pass && formik.errors.pass ? (
//       <p>{formik.errors.pass}</p>
//     ) : null}

//     <button type="submit">Submit</button>
//   </form>
// )
// }
