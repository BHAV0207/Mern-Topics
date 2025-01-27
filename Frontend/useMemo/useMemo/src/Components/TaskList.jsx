import React, { useMemo } from "react";
import Task from "./Task";

function TaskList({ list, counter }) {
  console.log("TaskList Rendered");

  const renderedList = useMemo(() => {
    return (
      <>
        {counter}
        {list.map((item, index) => (
          <Task key={index} item={item} />
        ))}
      </>
    );
  }, [list , counter]);
  return <>{renderedList}</>;
}

// what useMemo does is that it check the value given to it in the dependencies array if it has reRendered , that does not matter , it runs only when the values of the dependencies have been changed .
export default TaskList;
