import React, { useState } from "react"

import logo from "logo.svg"

export const NavBar = () => {
  const [active, setActiveClass] = useState(null)

  const handleClick = () => {
    setActiveClass(prevActiveClass => {
      if (prevActiveClass) {
        setActiveClass(null)
      } else {
        setActiveClass(true)
      }
    })
  }

  let burgerClassName = "navbar-burger burger"
  let navBarClassName = "navbar-menu"

  burgerClassName = active ? burgerClassName += "is-active" : burgerClassName
  navBarClassName = active ? navBarClassName += "is-active" : navBarClassName

  return (
    <nav className="navbar is-transparent">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://bulma.io">
          <img src={logo} alt="Todo Logo made by freepik" width="112" height="28" />
        </a>
        <div
          className={burgerClassName}
          data-target="navbarExampleTransparentExample"
          onClick={handleClick}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
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
            <p className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
              >
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Login</span>
              </a>
            </p>
            <p className="control">
              <a
                className="button is-primary"
                href="https://github.com/jgthms/bulma/releases/download/0.9.0/bulma-0.9.0.zip"
              >
                <span className="icon">
                  <i className="fas fa-download"></i>
                </span>
                <span>Create Account</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
