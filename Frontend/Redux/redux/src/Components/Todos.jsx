import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Features/ToDoFeatures/toDoSlice";

function Todos() {
  let [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addToDo(input));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        placeholder="add to-do"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Todos;
