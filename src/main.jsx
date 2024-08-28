// main.jsx: React 애플리케이션을 DOM에 렌더링합니다.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
<BrowserRouter>
  <App/>
</BrowserRouter>

)
