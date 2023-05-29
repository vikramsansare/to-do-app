import React from "react";
import "./TodoList.css";
import TodoItem from "../TodoItem";

export default function TodoList({ todo, deleteCurrentTodo }) {
  return (
    <ul className="todo-list">
      {todo.length !== 0 &&
        todo.map((item) => (
          <TodoItem
            todo={item}
            deleteCurrentTodo={deleteCurrentTodo}
            key={item.id}
          />
        ))}
    </ul>
  );
}
