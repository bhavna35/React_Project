import React, { useState } from "react";
import "./AddTodo.css";

function AddTodo({ addTodos }) {
  const [todotext, setTodoText] = useState("");

  return (
    <>
      <h1>Todo App</h1>
      <div className="input-todo-container">
        <input
          type="text"
          placeholder="add todo what you want"
          onChange={(e) => setTodoText(e.target.value)}
          value={todotext}
          className="input-todo"
        />
        <button
          onClick={() => {
            addTodos(todotext);
            setTodoText("");
          }}
          className="todo-btn"
        >
          Submit
        </button>
      </div>
    </>
  );
}

export default AddTodo;
