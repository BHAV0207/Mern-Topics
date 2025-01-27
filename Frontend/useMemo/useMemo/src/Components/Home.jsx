import React, { useState } from 'react'
import TaskList from './TaskList';

function Home() {
  let[task , setTask] = React.useState('');
  let[list , setList] = React.useState([]);
  let [counter, setCounter] = useState(0);
  

  const handleTask = (e) => {
    setList([...list , task])
    setTask('')
  }

  const handleChange = (e) => {
    setTask(e.target.value)
  }

  const handleClick = () => {
    setCounter(counter+1);
  }
  return (
    <div>
      <input type="text"  placeholder='enter task' value={task} onChange={handleChange}/>
      <button onClick={handleTask}>Add Task</button>
      <button onClick={handleClick}>counter</button>
      <TaskList list={list} counter={counter}/>
    </div>
  )
}

export default Home