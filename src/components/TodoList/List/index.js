import PropTypes from "prop-types"
import React from "react"

export const List = ({ todos }) => {
  return (
    <ol>
      {todos.map(({ id, text }) => (
        <li key={id}>{text}</li>
      ))}
    </ol>
  )
}

List.propTypes = {
  todos: PropTypes.array.isRequired,
}
