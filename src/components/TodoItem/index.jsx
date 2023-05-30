import React, { useRef, useState } from "react";
import "./TodoItem.css";
import Button from "../Button";

export default function TodoItem({
  id,
  todo,
  deleteCurrentTodo,
  updateCurrentTodo,
}) {
  const [editTodo, setEditTodo] = useState(todo.title);
  const [editTodoState, setEditTodoState] = useState(false);
  const singleTodoInputField = useRef(null);

  function newTodoEnterHandler(e) {
    setEditTodo(e.target.value);
  }

  function editTodoHandler() {
    setEditTodoState(true);
    singleTodoInputField.current.focus();
  }

  function updateCurrentTodoHandler(id) {
    setEditTodoState(false);
    setEditTodo(editTodo);
    updateCurrentTodo(id, editTodo);
  }

  return (
    <li className="todo-item" id={id}>
      {/* <input
        type="checkbox"
        name=""
        value={todo.id}
        onChange={onCheckHandler}
      /> */}
      <input
        type="text"
        value={editTodo}
        onChange={newTodoEnterHandler}
        readOnly={!editTodoState}
        autoFocus={editTodoState}
        ref={singleTodoInputField}
      />
      {!editTodoState && <Button onClick={editTodoHandler}>Edit</Button>}
      {editTodoState && (
        <Button onClick={() => updateCurrentTodoHandler(todo.id)}>
          Update
        </Button>
      )}
      {!editTodoState && (
        <Button onClick={() => deleteCurrentTodo(todo.id)}>Delete</Button>
      )}
    </li>
  );
}
