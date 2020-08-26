import React, { useState } from "react"

import logo from "logo.svg"

export const NavBar = () => {
  const [active, setActiveClass] = useState(null)

  const handleClick = () => {
    setActiveClass(prevActiveClass => {
      return !prevActiveClass
    })
  }

  let burgerClassName = "button navbar-burger burger"
  let navBarClassName = "navbar-menu"

  burgerClassName = active ? burgerClassName += "is-active" : burgerClassName
  navBarClassName = active ? navBarClassName += "is-active" : navBarClassName

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        {/* Add padding to make the clickable area for usability. */}
        <a className="navbar-item pa-2" href="https://bulma.io">
          <img src={logo} alt="Todo Logo made by freepik" width="28"/>
        </a>
        <button
          className={burgerClassName}
          data-target="navbarExampleTransparentExample"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div id="navbarExampleTransparentExample" className={navBarClassName}>
        <div className="navbar-start">
          <a className="navbar-item" href="/About">
            About
          </a>
          <a className="navbar-item" href="/FAQ">
            FAQ
          </a>
          <a className="navbar-item" href="/Contact">
            Contact
          </a>
        </div>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <div className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
              >
                <span>Login</span>
              </a>
            </div>
            <div className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
              >
                <span>Create Account</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
