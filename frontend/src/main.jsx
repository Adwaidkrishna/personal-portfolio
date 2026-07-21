import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(//React finds this element in index.html:
  <StrictMode>
    <App />
  </StrictMode>,
)
