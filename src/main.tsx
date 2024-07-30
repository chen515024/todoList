import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'virtual:uno.css'
import router from '@/router/index'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)
