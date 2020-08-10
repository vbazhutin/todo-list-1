import React, { useEffect, useState } from "react"

import { AddForm as Add } from "./AddForm"
import { List } from "./List"

import api from "api"

export const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    ;(async () => {
      setTodos(await api.index())
    })()
  }, [])

  const handlerAdd = (event) => {
    event.preventDefault()

    const newTodo = {
      id: todos.length + 1,
      completed: false,
      text: event.target.elements[0].value,
    }

    setTodos(() => todos.concat(newTodo))
  }

  const handleCheckbox = ({ target }) => {
    setTodos(() => {
      // Find the correct task
      const found = todos.find(
        ({ id }) => id === Number(target.parentElement.dataset.id)
      )

      found.completed = target.checked

      return todos.map((todo) =>
        // Once we match the 'todo' in the current 'todos' with the updated 'found', we can replace it with the newly 'completed'/'incompleted' todo
        todo.id === found.id ? found : todo
      )
    })
  }

  return (
    <main>
      <List todos={todos} handler={handleCheckbox} />
      <Add handler={handlerAdd} />
    </main>
  )
}
