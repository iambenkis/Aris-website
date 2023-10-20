import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Why from './components/Why'
import Footer from './components/Footer'
import Insight from './components/Insight'
import Testimony from './components/Testimony'
import Solutions from './pages/Solutions'

function App() {
  return (
    <Router>
      <div className="bg-neutral-100">
        <Navbar />
        <Routes>
          <Route path="/solutions" element={<Solutions />} />
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
