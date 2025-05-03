import { useState } from 'react'
import './App.css'
import Home from './pages/Home/Home'
import { BrowserRouter, Routes, Route } from 'react-router'
import paths from './paths/paths'
import { useTranslation } from 'react-i18next'
import i18n from './i18n'
import Details from './pages/Details/Details'

function App() {



  return (
    <BrowserRouter>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.details} element={<Details />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
