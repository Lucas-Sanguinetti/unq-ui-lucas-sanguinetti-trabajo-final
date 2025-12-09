import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import { ResultProvider } from "./Resultcontext.jsx";



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ResultProvider>
        <App />
      </ResultProvider>
    </BrowserRouter>
  </React.StrictMode>,
)