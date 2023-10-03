import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Contatos from './componentes/contatos/Contatos'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <Contatos/>
  </React.StrictMode>,
)
