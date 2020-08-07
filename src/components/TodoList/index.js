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

  const handleCheckbox = ({target}) => {
    console.log(target.checked, target.parentElement.dataset.id)
    // TODO: If checked...find the element in todos and change 'checked' to true

  }

  return <main>
    <List todos={todos} handler={handleCheckbox}/>
    {/* <Add /> */}
  </main>
}
