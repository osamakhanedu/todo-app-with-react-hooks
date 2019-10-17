import React from "react";

export const Todo = ({ todo, index, completeTodo,removeTodo }) => (
  <div
    className="todo"
    style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  >
    {todo.text}

    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button className="del" onClick={() => removeTodo(index)}>X</button>
    </div>
  </div>
);
