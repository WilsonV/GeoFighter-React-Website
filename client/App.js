import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'

const App = () => {
  return (
    <>
      <Navbar />

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/*" element={<HomePage />} />
        </Routes>
      </Router>
   </>
  )
}

export default App
