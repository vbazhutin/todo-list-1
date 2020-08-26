import React from "react"

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import { NavBar as Nav, TodoList, Home, About, Contact } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Nav />
      <Route exact={true} path="/">
        <Home />
      </Route>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>

      {/* TODO: Move this behind 'login' system. */}
      <TodoList />
    </Router>
  )
}
