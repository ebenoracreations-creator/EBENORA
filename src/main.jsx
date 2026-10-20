import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// Auto-redirect direct pathnames like /admin to /#/admin for HashRouter compatibility
if (typeof window !== 'undefined' && window.location.pathname && window.location.pathname !== '/' && !window.location.hash) {
  const cleanPath = window.location.pathname.replace(/^\/+/, '');
  window.location.replace(`${window.location.origin}/#/${cleanPath}${window.location.search}`);
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
