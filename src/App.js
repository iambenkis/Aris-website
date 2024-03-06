import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Why from './components/Why'
import Footer from './components/Footer'
import Insight from './components/Insight'
import Testimony from './components/Testimony'
import Solutions from './pages/Solutions'
import Services from './pages/Services'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {
  return (
    <Router>
      <div className="bg-gray-100">
        <Navbar />
        <Routes>
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a_propos" element={<About />} />
          <Route
            path="/"
            element={
              <>
                <Home />
                <Why />
                <Insight />
                <Testimony />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
