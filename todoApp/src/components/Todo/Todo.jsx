import React from "react";
import { useState } from "react";
import "./Todo.css";

function Todo({ finishTodo, editTodo, deleteTodo, text, isFinished }) {
  const [isEditting, setIsEditting] = useState(false);
  const [todoText, setTodoText] = useState(text);

  return (
    <div className="todoList-container">
      <input
        type="checkbox"
        checked={isFinished}
        onChange={() => finishTodo(!isFinished)}
        className="input-checkbox"
      />
      {isEditting ? (
        <input
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          className="todoText"
        />
      ) : (
        <span className="todoText"> {todoText} </span>
      )}
      <button
        onClick={() => {
          setIsEditting(!isEditting);
          editTodo(todoText);
        }}
        className="todo-edit-btn"
      >
        {" "}
        {isEditting ? "Save" : "Edit"}{" "}
      </button>
      <button onClick={deleteTodo} className="todo-del-btn">
        {" "}
        Delete{" "}
      </button>
    </div>
  );
}

export default Todo;
