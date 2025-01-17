import React from 'react'
import { Navigate } from 'react-router-dom'
import {jwtDecode} from "jwt-decode";


function ProtectedRoutes({role , element}) {
  const token = localStorage.getItem('token');

  if(!token) return <Navigate to='/' replace/> 

  try{
    const decoded = jwtDecode(token);

    if(decoded.role !== role){
      return <Navigate to='/' replace/>
    }
    return element;
  }
  catch(err){
    return <Navigate to='/' replace/>
  }
}

export default ProtectedRoutes;