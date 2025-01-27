import React from 'react'

function Task({item}) {
  console.log('Task Rendered');

  return (
    <div>{item}</div>
    
  )
}

export default Task