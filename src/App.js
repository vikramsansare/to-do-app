import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todo") !== null) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);

  function formSubmitHandler(e) {
    e.preventDefault();
    setTodo([{ id: new Date().getTime(), title: input }, ...todo]);
    localStorage.setItem(
      "todo",
      JSON.stringify([
        {
          id: new Date().getTime(),
          title: input,
        },
        ...todo,
      ])
    );
    setInput("");
  }

  function handleInputChange(e) {
    setInput(e.target.value);
  }

  function deleteCurrentTodo(id) {
    setTodo(
      todo.filter((item) => {
        return item.id !== id;
      })
    );
    localStorage.setItem(
      "todo",
      JSON.stringify(
        todo.filter((item) => {
          return item.id !== id;
        })
      )
    );
    if (JSON.parse(localStorage.getItem("todo")).length === 0) {
      localStorage.removeItem("todo");
    }
  }

  function deleteAllTodosHandler() {
    setTodo([]);
    localStorage.removeItem("todo");
  }

  return (
    <>
      <div className="todo-main-wrap">
        <Form
          handleInputChange={handleInputChange}
          formSubmitHandler={formSubmitHandler}
          input={input}
        />
        {todo.length > 0 && (
          <div className="delete-selected-button-container">
            <Button onClick={deleteAllTodosHandler}>Delete all</Button>
          </div>
        )}
        <TodoList todo={todo} deleteCurrentTodo={deleteCurrentTodo} />
      </div>
    </>
  );
}

export default App;
