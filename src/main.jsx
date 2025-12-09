import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; 
import './index.css'
import App from './App.jsx'
import { ResultProvider } from "./Resultcontext.jsx";
import { DifficultyProvider } from './Difficultycontext.jsx';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <DifficultyProvider>
        <ResultProvider>
          <App />
        </ResultProvider>
      </DifficultyProvider>
    </BrowserRouter>
  </React.StrictMode>,
)