// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
//pages
import HomePage from "./pages/HomePage/HomePage";
import AdminPage from "./pages/AdminPage/AdminPage";
import AssessmentPage from "./pages/AssessmentPage/AssessmentPage";
import ContactPage from './pages/ContactPage/ContactPage';


//components 
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";



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
        <Route path="/contact" element={<ContactPage />} />
        <Route  path="/admin" element={<AdminPage />}/>
      </Routes>
      <footer><Footer /></footer>
      </BrowserRouter>
    </>
  )
}

export default App
