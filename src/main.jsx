import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './contextApi/AppContext.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppContextProvider>
      <App />
      <Toaster toastOptions = {{
          className:"",
          style:{
            "font-size": "18px",
            "padding" : "8px",
            "font-weight" : "600",
              },
            }}/>
    </AppContextProvider>
  </BrowserRouter>
)
