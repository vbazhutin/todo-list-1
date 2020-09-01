import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ loginMode, AccHandler }) => {



  return (
    <div>
      <button className="button mt-4 ml-2" onClick={AccHandler}>
        {loginMode ? "Create an account" : "Already have an account?"}
      </button>

  )
}



Options.propTypes = {
  loginMode: PropTypes.bool,
  createAccHandler: PropTypes.func,
}
