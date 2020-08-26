import React, { useEffect, useReducer, useState } from "react"

import { AddForm as Add } from "./AddForm"
import { List } from "./List"

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return state.concat({
        id: state.length + 1,
        completed: false,
        text: action.text,
      })
    case "toggle-completion": // Wrap 'case' in blocks for proper scoping of lexical bindings (https://eslint.org/docs/rules/no-case-declarations)
    {
      const { toggledTodo } = action
      return state.filter(({ id }) => id !== toggledTodo.id).concat(toggledTodo)
      }
    case "trash":
      return state.filter(({id}) => id !== action.id)
    default:
      return state
  }
}

export const TodoList = () => {
  const [todos, dispatch] = useReducer(reducer, [])

  const handleAdd = (event) => {
    event.preventDefault()
    dispatch({ type: 'add', text: event.target.elements[0].value})
  }

  const handleCheckbox = ({ target }) => {
     const toggledTodo = todos.find(
       ({ id }) => id === Number(target.closest("li").dataset.id)
     )

    toggledTodo.completed = target.checked
    dispatch({type: 'toggle-completion', toggledTodo})

  }

  const handleTrash = ({ target }) => {
    dispatch({type: 'trash', id: Number(target.closest("li").dataset.id)})
  }

  const handleValue = ({ target: {value} }) => {
    setFormVal(value)
  }

  return (
    <main>
      <List
        todos={todos}
        checkboxHandler={handleCheckbox}
        trashHandler={handleTrash}
      />
      <Add changeHandler={handleValue} submitHandler={handleAdd} value={formVal}/>
    </main>
  )
}
