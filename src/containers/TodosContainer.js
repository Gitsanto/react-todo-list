import React from "react";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import { getTodoList } from "../mock-api";

class TodosContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    getTodoList()
      .then(todos => this.setState({ todos }))
      .catch(error => alert(error));
  }

  onDoneHandler = (index, event) => {
    const todos = this.state.todos.slice(0);
    todos[index].done = event.target.checked;
    this.setState({ todos });
  };

  onDeleteHandler = index => {
    // Request
    const todos = this.state.todos.slice(0);
    todos.splice(index, 1);
    this.setState({ todos });
  };

  onAddTodoHandler = newTodo => {
    const todos = this.state.todos.slice(0);
    todos.push(newTodo);
    this.setState({ todos });
  };

  render() {
    return (
      <div>
        <TodoList
          todos={this.state.todos}
          onDoneHandler={this.onDoneHandler}
          onDeleteHandler={this.onDeleteHandler}
        />
        <AddTodo onAddTodoHandler={this.onAddTodoHandler} />
      </div>
    );
  }
}

export default TodosContainer;
