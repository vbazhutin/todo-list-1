import PropTypes from "prop-types"
import React, { Fragment } from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons"

import "./List.css"

export const List = ({ todos, checkboxHandler, trashHandler }) => {
  const todosCount = todos.length
  const completedCount = todos.filter(({ completed }) => completed).length

  let className = "has-background-dark has-text-centered has-text-weight-bold my-4 py-2"
  className +=
    completedCount / todosCount < 0.5 ? " has-text-warning" : " has-text-success"

  return (
    <Fragment>
      <p className="has-text-centered">
        {new Date().toLocaleDateString()}&nbsp;
      </p>

      <p className={className}>
        {completedCount} / {todosCount}
      </p>

      <ul>
        {todos.map(({ id, completed, text }) => (
          <li key={id} data-id={id} className={completed ? "columns completed" : "columns"}>
            <div className="column is-one-fifth">{text} <input type="checkbox" onClick={checkboxHandler} /></div>

            <div className="column">
              {/* TODO Put trashcan on same line */}
              <FontAwesomeIcon icon={faTrash} className="has-text-danger" onClick={trashHandler}/>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

List.propTypes = {
  checkboxHandler: PropTypes.func,
  todos: PropTypes.array.isRequired,
  trashHandler: PropTypes.func,
}
