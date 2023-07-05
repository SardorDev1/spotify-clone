
import React from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom"
import { Artist, Main, Navbar } from './companents'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/artist/:id' element={<Artist />} />
      </Routes>
    </>
  )
}

export default App
