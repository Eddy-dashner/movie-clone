import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Film from './Page/film.jsx'
import Movie from './Page/movie.jsx'
import Tv from './Page/tv.jsx'
import Menu from './Page/menu.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>

  },
  {
    path:"/Film",
    element:<Film/>
  },
  {
    path:"/menu",
    element:<Menu/>
  },
  {
    path:"/movie",
    element:<Movie/>
  },
  {
    path:"/tv",
    element:<Tv/>
  },
  
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
