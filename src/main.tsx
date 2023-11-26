import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.tsx'
import './index.scss'

/**@Font */
import "@fontsource/varela-round"; // Defaults to weight 400
import "@fontsource/varela-round/400.css"; // Specify weight


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
