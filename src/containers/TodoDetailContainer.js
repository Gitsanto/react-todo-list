import React from 'react'
import { getTodo } from '../mock-api'

class TodoDetailContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    getTodo(this.props.match.params.id)
      .then(todo => this.setState({ ...todo }))
      .catch(error => console.log(error))
  }

  render() {
    const { id, text, done } = this.state;
    return (
      <div>
        <h1 style={{ textDecoration: done ? 'line-through' : 'none' }}>{text}</h1>
        <div>ID: {id}</div>
      </div>
    )
  }
}

export default TodoDetailContainer