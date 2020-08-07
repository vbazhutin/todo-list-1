import React, { useEffect, useState } from "react"

import {List} from "./List"

import api from "api"

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    (async () => {
      setTodos(await api.index())
    })()
  }, [])

  return <main>
    <List todos={todos} />
    {/* <Add /> */}
  </main>
}
