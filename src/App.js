import React from "react"

import { NavBar as Nav, TodoList } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <>
      <Nav />
      <div className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-centered is-uppercase	title">To Do List</h1>
          </div>
        </div>
      </div>

      <div className="wrapper">
        <TodoList />
      </div>
    </>
  )
}
