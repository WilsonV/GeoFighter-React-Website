import React,{useState} from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './Components/HomePage'

const App = () => {
  const [showRegisterLoginModal, setRegisterLoginModalVisibility] = useState({show:false, login:false})

  function setRegisterLoginModal(show=true,login=false){
    setRegisterLoginModalVisibility({show, login})
  }

  return (
    <>
      <Navbar setRegisterLoginModal={setRegisterLoginModal} showRegisterLoginModal={showRegisterLoginModal}/>

      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage setRegisterLoginModal={setRegisterLoginModal} showRegisterLoginModal={showRegisterLoginModal}/>} />
          <Route path="/*" element={<HomePage setRegisterLoginModal={setRegisterLoginModal} showRegisterLoginModal={showRegisterLoginModal}/>} />
        </Routes>
      </Router>
   </>
  )
}

export default App
