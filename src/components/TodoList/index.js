import React, { useEffect, useState } from "react"

import { List } from "./List"

import api from "api"

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    ;(async () => {
      setTodos(await api.index())
    })()
  }, [])

  const handleCheckbox = ({ target }) => {
    const targetID = target.parentElement.dataset.id
    setTodos(
      // TODO: Verify that it's 🙆🏽‍♂️ to not use the previous state and to just access state directly
      () => {
        // Find the correct task
        const found = todos.find(({ id }) => id === Number(targetID))
        found.completed = true

        return todos.map((todo) => (todo.id === found.id ? found : todo))
      }
    )
  }

  return (
    <main>
      <List todos={todos} handler={handleCheckbox} />
      {/* <Add /> */}
    </main>
  )
}
