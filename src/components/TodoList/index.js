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
    setTodos((currentTodos) => {
      // Find the correct task
      const found = currentTodos.find(({ id }) => id === Number(targetID))
      found.completed = true

      // Get an Array of all other tasks
      const otherTodos = currentTodos.filter(
        ({ id }) =>
          // Use JSON.Parse() to 'compare objects'
          JSON.parse(id) !== JSON.parse(targetID)
      )

      return otherTodos.concat(found)
    })
  }

  return (
    <main>
      <List todos={todos} handler={handleCheckbox} />
      {/* <Add /> */}
    </main>
  )
}
