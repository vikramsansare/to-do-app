import React from "react";
import "./Form.css";
import Button from "../Button";

export default function Form({ handleInputChange, formSubmitHandler, input }) {
  return (
    <form onSubmit={formSubmitHandler} className="todo-form">
      <input
        type="text"
        onChange={handleInputChange}
        value={input}
        placeholder="Enter your task here"
      />
      <Button>Add</Button>
    </form>
  );
}
