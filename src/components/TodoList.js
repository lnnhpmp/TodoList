import React from "react";
import Todo from "./Todo";
import { List } from "@material-ui/core";

function TodoList({ todos, removeTodo, toggleComplete }) {
    return (
        <List>
            {todos.map(todo => (
                <Todo 
                    key={todo.id} // important
                    todo={todo} 
                    removeTodo={removeTodo}
                    toggleComplete={toggleComplete}
                />
            ))}
        </List>
    );
}

export default TodoList;