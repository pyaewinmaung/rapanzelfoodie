import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import './index.css'
import './index.js'

library.add(fas);


ReactDOM.createRoot(document.getElementById('root')).render(

    <App />
  
)
