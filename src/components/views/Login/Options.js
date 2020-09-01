import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ loginMode, createAccHandler }) => {



  return (
    <button className="button mt-3 ml-2">
      {loginMode ? "Create an account" : "Already have an account?"}
    </button>
  )
}



Options.propTypes = {
  loginMode: PropTypes.bool,
  createAccHandler: PropTypes.func,
}
