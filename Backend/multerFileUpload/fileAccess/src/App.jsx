import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FileUpload from './Components/FileUpload'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FileUpload></FileUpload>
    </>
  )
}

export default App
