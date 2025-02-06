import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'


function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/header" element={<Header />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
   </>
  )
 
}
export default App
