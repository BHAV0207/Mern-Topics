import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RegexProvider } from './Store/Context.jsx'

createRoot(document.getElementById('root')).render(
  <RegexProvider>
    <App/>
  </RegexProvider>
)
