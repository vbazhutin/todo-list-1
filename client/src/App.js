import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { TodoList, Home, Login, Footer, Four04 } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Switch>
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

        <Route>
          <Four04 />
        </Route>

      </Switch>

      <Footer />
    </Router>
  )
}
