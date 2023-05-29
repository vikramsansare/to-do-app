import React from "react";
import "./Form.css";
import Button from "../Button";

export default function Form({ handleInputChange, formSubmitHandler, input }) {
  return (
    <form onSubmit={formSubmitHandler} className="todo-form">
      <input type="text" onChange={handleInputChange} value={input} />
      <Button>Add</Button>
    </form>
  );
}
