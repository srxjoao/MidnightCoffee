import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Registrar from './pages/Registro'
import Alterar from './pages/Alterar'
import Login from './pages/Login'
//Criar a função de alteração, com useEfect
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
       <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/Registro' element={<Registrar/>}/>
            <Route path="/alterar/:id" element={<Alterar />} />            
            <Route path='Login' element={<Login/>}/>
       </Routes>
    </BrowserRouter>
  </StrictMode>,
)
