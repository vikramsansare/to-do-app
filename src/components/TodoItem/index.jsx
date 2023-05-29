import React from "react";
import "./TodoItem.css";
import Button from "../Button";

export default function TodoItem({ todo, deleteCurrentTodo }) {
  return (
    <li className="todo-item" id={todo.id}>
      {/* <input type="checkbox" name="" id="" /> */}
      <p>{todo.title}</p>
      <Button onClick={() => deleteCurrentTodo(todo.id)}>Delete</Button>
    </li>
  );
}
