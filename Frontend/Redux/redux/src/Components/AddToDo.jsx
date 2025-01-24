import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeToDo } from "../Features/ToDoFeatures/toDoSlice";

function AddToDo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Todos</div>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeToDo(todo.id))}>X</button>
        </li>
      ))}
    </div>
  );
}

export default AddToDo;
