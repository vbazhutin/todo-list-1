import React from "react"

import { useFormik } from "formik"
import * as Yup from 'yup'

export const Login = () => {
  // const validate = (values) => {
  //   const errors = {}

  //   if (!values.name) {
  //     errors.name = "Name is required!"
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required!"
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  //   ) {
  //     errors.email = "Doesn't look like email"
  //   }
  //   if (!values.pass) {
  //     errors.pass = "Password is required!"
  //   }

  //   return errors
  // }

  const formik = useFormik({
    // This is like 'setState'
    initialValues: {
      email: "",
      name: "",
      pass: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Valid email required").required("Email is required"),
      pass: Yup.string().min(6).required("Password is required")
    }),
    onSubmit: (values) => {
      // This is like utility fxn. that gathers all values
      console.log("submission", values)
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        {...formik.getFieldProps('name')}
      />
      {formik.touched.name && formik.errors.name ? (
        <p>{formik.errors.name}</p>
      ) : null}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        {...formik.getFieldProps('email')}
      />
      {formik.touched.email && formik.errors.email ? (
        <p>{formik.errors.email}</p>
      ) : null}

      <label htmlFor="pass">Password</label>
      <input
        type="password"
        id="pass"
        {...formik.getFieldProps('pass')}
      />
      {formik.touched.pass && formik.errors.pass ? (
        <p>{formik.errors.pass}</p>
      ) : null}

      <button type="submit">Submit</button>
    </form>
  )
}
