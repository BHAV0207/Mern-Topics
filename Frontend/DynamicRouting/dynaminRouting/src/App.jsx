import './App.css'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import User from './Components/User';
import Home from './Components/Home';

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/user/:id'  element={<User></User>}></Route>
      </Routes>
    </Router>
  )
}

export default App
