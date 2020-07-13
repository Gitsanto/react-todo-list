import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({todos, onDoneHandler, onDeleteHandler}) => {
  return (
    <div>
      {todos.length === 0 && <div>There are no todos.</div>}
      {
        todos.length > 0 &&
        <div>
          {
            todos.map((todo, index) => {
              return <Todo index={index}
                {...todo}
                onDoneHandler={onDoneHandler}
                onDeleteHandler={onDeleteHandler} />
            })
          }
        </div>
      }
    </div>
  )
}

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape(Todo)),
  onDoneHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired
}

export default TodoList