import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import HomePage from './Components/HomePage'
import Forum from './Components/Forum'
import NavigationContext from './Components/Forum/NavigationContext'

const App = () => {
  const [showRegisterLoginModal, setRegisterLoginModalVisibility] = useState({ show: false, login: false })

  function setRegisterLoginModal(show = true, login = false) {
    setRegisterLoginModalVisibility({ show, login })
  }

  return (
    <Router>
      <Navbar setRegisterLoginModal={setRegisterLoginModal} />
      <Routes>
        <Route exact path="/" element={<HomePage setRegisterLoginModal={setRegisterLoginModal} showRegisterLoginModal={showRegisterLoginModal} />} />

        <Route exact path='/forum' element={
          <NavigationContext>
            <Forum />
          </NavigationContext>

        } />
      </Routes>
    </Router>
  )
}

export default App
