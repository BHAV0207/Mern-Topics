import './App.css'
import { BrowserRouter as Router , Routes , Route , Navigate } from 'react-router-dom'
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import AdminPage from './Components/AdminPage';
import UserPage from './Components/UserPage'
import ProtectedRoutes from './Components/ProtectedRoutes';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<LoginPage></LoginPage>} /> 
        <Route path='/register' element={<RegisterPage></RegisterPage>} />
        <Route path='/admin' element={<ProtectedRoutes role='admin' element={<AdminPage></AdminPage>}/>} />
        <Route path='/user' element={<ProtectedRoutes role='user' element={<UserPage></UserPage>}/>} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </Router>
  )
}

export default App
