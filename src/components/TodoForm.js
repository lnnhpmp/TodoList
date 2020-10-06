import React, {useState} from "react";
import {v4 as uuid} from "uuid";
import { Button, TextField } from "@material-ui/core";

function TodoForm({ addTodo }) {
    const [todo, setTodo] = useState({
        id: "",
        task: "",
        completed: false,
    });

    function handleTaskInputChange(e) {
        setTodo({...todo, task: e.target.value});
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (todo.task.trim()) {
            // Equal to addTodo(Object.assign({id: uuid()}, {task: todo.task}, {completed: todo.completed}));
            addTodo( {...todo, id: uuid()});
            // reset task input
            setTodo({ ...todo, task: "" });
        }
        console.log(todo)
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="task"
                type="text"
                name="task"
                value={todo.task}
                onChange={handleTaskInputChange}
            >
            </TextField>
            <Button type="submit">
                submit
            </Button>
        </form>
    );
}

export default TodoForm;