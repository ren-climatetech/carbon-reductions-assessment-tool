// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//pages
import HomePage from "./pages/HomePage/HomePage";
import AssessmentPage from "./pages/AssessmentPage/AssessmentPage";

//components 
import Header from "./components/Header/Header";



function App() {

  return (
    <>
      <BrowserRouter>
      <header>
        <Header />

      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/assessment" element={<AssessmentPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
