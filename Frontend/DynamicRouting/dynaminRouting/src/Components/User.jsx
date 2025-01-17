import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function User() {
  const {id} = useParams();
  const navigate = useNavigate();


  const handleNavigate = () => {
    navigate('/');
  }
  return (
    <div>
      <div>{id}</div>
      <div onClick={handleNavigate}>click here to navigate back to the home page  </div>
    </div>
  )
}

export default User