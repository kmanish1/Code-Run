import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Codeform } from './pages/Codeform'
import Tables from './pages/Tables'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Codeform />} />
          <Route path="/entries" element={<Tables />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
