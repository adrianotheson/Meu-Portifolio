import Header from './componentes/header/Header'
import Main from './componentes/main/Main'
import Footer from './componentes/footer/Footer'

import React from 'react'
import ReactDOM from 'react-dom/client'
import Contatos from './componentes/contatos/Contatos'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: 
    <>
    <Header/><Main/><Footer/>
    </>

  },
  {
    path:"/contatos",
    element: 
    <>
    <Header/><Contatos/><Footer/>
    </>

  },
 
  
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <RouterProvider router={router}/>
  </React.StrictMode>,
)
