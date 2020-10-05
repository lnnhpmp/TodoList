import React, { useEffect, useState } from 'react';
import './App.css';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import Typography from "@material-ui/core/Typography"

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function addTodo(todo) {
    // add new todo task to the beginning of todos array
    setTodos([todo, ...todos]);
  }

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id != id));
  }

  function toggleComplete(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <Typography style={{ padding: 16}} variant="h1">
          React TODO
        </Typography>
        <TodoForm addTodo={addTodo} />
        <TodoList 
          todos={todos} 
          removeTodo={removeTodo}
          toggleComplete={toggleComplete}
        />
      </header>
    </div>
  );
}

export default App;
