import React from "react"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { TodoList, Home, Login, Footer, Four04, Header } from "./components"

import "./App.scss"

export const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>

        <Route exact path="/login">
          <Header />
          <Login />
        </Route>

        <Route exact path="/todos">
          <Header />
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
