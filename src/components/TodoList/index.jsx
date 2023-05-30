import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem";

export default function TodoList({
  todo,
  deleteCurrentTodo,
  updateCurrentTodo,
}) {
  return (
    <ul className="todo-list">
      {todo.length !== 0 &&
        todo.map((item) => (
          <TodoItem
            todo={item}
            deleteCurrentTodo={deleteCurrentTodo}
            updateCurrentTodo={updateCurrentTodo}
            key={item.id}
            id={item.id}
          />
        ))}
    </ul>
  );
}
