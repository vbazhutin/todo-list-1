import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import { TodoList, Home } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Route exact={true} path="/">
        <Home />
      </Route>
      {/* TODO: Move this behind 'login' system. */}
      <TodoList />
    </Router>
  )
}
