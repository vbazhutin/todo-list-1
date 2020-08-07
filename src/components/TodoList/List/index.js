import PropTypes from "prop-types"
import React from "react"

export const List = ({ todos, handler }) => {
  return (
    <ol>
      {todos.map(({ id, text }) => (
        <li key={id} data-id={id}>
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
