import React from 'react'

import { useFormik } from 'formik'

export const Login = () => {

  const formik = useFormik({
    // this is like 'setState'
    initialValues: {
      name: '',
      email: '',
      password: ''

    },
    onSubmit: values => {
      // gathers all values
      console.log('submission', values)
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
    <input type="name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
    <label htmlFor="password">Password</label>
    <input type="password" id="password" name="password" onChange={formik.handleChange} value={formik.values.password}/>
    <button type="submit">Submit</button>
    </form>
  )
}
