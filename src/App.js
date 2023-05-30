import { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  // const [checkedTodo, setCheckedTodo] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todo") !== null) {
      setTodo(JSON.parse(localStorage.getItem("todo")));
    }
  }, []);

  function formSubmitHandler(e) {
    e.preventDefault();
    setTodo([{ id: new Date().getTime(), title: input.trim() }, ...todo]);
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
    setInput("");
  }

  // function onCheckHandler(e) {
  //   if (e.target.checked) {
  //     setCheckedTodo([...new Set([Number(e.target.value), ...checkedTodo])]);
  //   } else {
  //     setCheckedTodo([
  //       ...new Set(
  //         checkedTodo.filter((item) => {
  //           return item !== Number(e.target.value);
  //         })
  //       ),
  //     ]);
  //   }
  // }

  // function deleteSelectedTodosHandler() {
  //   let a;
  //   if (checkedTodo.length > 0) {
  //     console.log(checkedTodo);
  //     checkedTodo.forEach((id) => {
  //       a = todo.filter((item) => {
  //         return item.id !== id;
  //       });
  //     });
  //   }
  //   console.log(a);
  // }

  function updateCurrentTodo(id, currentTodo) {
    setTodo(
      todo.map((item) => {
        if (item.id === id) {
          item.title = currentTodo;
        }
        return item;
      })
    );
    localStorage.setItem(
      "todo",
      JSON.stringify(
        todo.map((item) => {
          if (item.id === id) {
            item.title = currentTodo;
          }
          return item;
        })
      )
    );
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
            {/* <Button onClick={deleteSelectedTodosHandler}>
              Delete selected
            </Button> */}
            <Button onClick={deleteAllTodosHandler}>Delete all</Button>
          </div>
        )}
        <TodoList
          todo={todo}
          deleteCurrentTodo={deleteCurrentTodo}
          // onCheckHandler={onCheckHandler}
          updateCurrentTodo={updateCurrentTodo}
        />
      </div>
    </>
  );
}

export default App;
