const todos = [
  {
    id: 1,
    text: "Learn React",
    done: true,
    priority: 1
  },
  {
    id: 2,
    text: "Learn JSX",
    done: false,
    priority: 3
  }
];

export function getTodoList() {
  return Promise.resolve(todos);
}

export function getTodo(id) {
  const todo = todos.find(todo => todo.id === parseInt(id, 10));
  return Promise.resolve(todo);
}
