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
        <a className="navbar-item pa-2" href="/">
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
          <a className="navbar-item" href="/Contact">
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}
