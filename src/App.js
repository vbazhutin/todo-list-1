import React from "react"

import { BrowserRouter as Router, Route } from "react-router-dom"

import { TodoList, Home, Login } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Route exact={true} path="/">
        <Home />
      </Route>

      <Route exact={true} path="/login">
        <Login />
      </Route>

      <Route exact={true} path="/todos">
      {/* TODO: Move this behind 'login' system. */}
      <TodoList />
      </Route>
      <Footer />
    </Router>
  )
}
