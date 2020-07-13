import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

const Todo = ({id, index, text, done, priority, onDoneHandler, onDeleteHandler}) => {

  const todoStyle = {
    'border': '1px solid black',
    padding: '20px',
    'margin-top': '20px'
  }

  return (
    <div className={`todo ${done ? 'is-done' : ''}`}
      style={todoStyle}>
      <h4 style={{ textDecoration: done ? 'line-through' : 'none' }}>
        <Link to={`/todos/${id}`}>{text}</Link>
      </h4>
      <div>Priority: {priority}</div>
      <div>
        <label>
          {done ? 'Completed' : 'Mark as completed'}
          <input type="checkbox"
            checked={done}
            onChange={event => onDoneHandler(index, event)} />
        </label>
        <button onClick={() => onDeleteHandler(index)}>Delete</button>
      </div>
    </div>
  )
};

Todo.propTypes = {
  index: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  done: PropTypes.bool,
  priority: PropTypes.number,
  onDoneHandler: PropTypes.func.isRequired,
  onDeleteHandler: PropTypes.func.isRequired
}

Todo.defaultProps = {
  priority: 2
}

export default Todo