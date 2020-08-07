import React, { Fragment } from "react"

import { TodoList } from "./components"

import "./App.css"

export const App = () => {
  return (
    <Fragment>
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
    </Fragment>
  )
}
