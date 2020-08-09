import React, { useEffect, useState } from "react"

import {AddForm as Add} from "./AddForm"
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
    setTodos(
      // TODO: Verify that it's 🙆🏽‍♂️ to not use the previous state and to just access state directly
      () => {
        // Find the correct task
        const found = todos.find(
          ({ id }) => id === Number(target.parentElement.dataset.id)
        )

        found.completed = target.checked

        return todos.map((todo) => (todo.id === found.id ? found : todo))
      }
    )
  }

  return (
    <main>
      <List todos={todos} handler={handleCheckbox} />
      <Add />
    </main>
  )
}
