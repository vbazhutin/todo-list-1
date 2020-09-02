import React from 'react'
import PropTypes from 'prop-types'

export const Options = ({ forgotMode, loginMode, AccHandler }) => (
  <div>
    <button className="button mt-4 ml-2" onClick={AccHandler}>
      {loginMode ? "Create an account" : "Already have an account?"}
    </button>

    {loginMode && !forgotMode ? (
      <button className="button mt-4 ml-2" onClick={AccHandler}>Forgot Password?</button>
    ) : null}
  </div>
)

Options.propTypes = {
  loginMode: PropTypes.bool,
  AccHandler: PropTypes.func,
}

Options.defaultProps = { loginMode: false }
