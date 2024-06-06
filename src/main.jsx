import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ImageComp from './pages/ImageComp.jsx'
import AudioComp from './pages/AudioComp.jsx'
import VideoComp from './pages/VideoComp.jsx'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/image',
    element: <ImageComp />
  },
  {
    path: '/audio',
    element: <AudioComp />
  },
  {
    path: '/video',
    element: <VideoComp />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
)
