import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './paginas/Home/Home'
import Footer from './components/Footer/Footer'
import ListarCategorias from './components/Categorias/ListarCategorias/ListarCategorias'
import FormCategoria from './components/Categorias/FormCategoria/FormCategoria'
import DeletarCategoria from './components/Categorias/DeletarCategoria/DeletarCategoria'

function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar />
      <div className='min-h-[80vh]'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/categorias' element={<ListarCategorias />} />
          <Route path="/cadastrarCategoria" element={<FormCategoria />} />
          <Route path="/editarCategoria/:id" element={<FormCategoria />} />
          <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />

        </Routes>
      </div>
      <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
