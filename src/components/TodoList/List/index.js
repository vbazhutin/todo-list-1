import PropTypes from "prop-types"
import React from "react"

import "./List.css"

export const List = ({ todos, handler }) => {
  return (
    <ol>
      {todos.map(({ id, completed, text }) => (
        <li
          key={id}
          data-id={id}
          className={completed ? "completed" : null}
        >
          {text} <input type="checkbox" onClick={handler} />
        </li>
      ))}
    </ol>
  )
}

List.propTypes = {
  handler: PropTypes.func,
  todos: PropTypes.array.isRequired,
}
