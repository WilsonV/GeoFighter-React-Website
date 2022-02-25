import React, { useEffect, useState } from 'react'
import BackgroundVideo from './BackgroundVideo'
import RegisterModal from './RegisterModal'

const VideoIntro = () => {
  const [showRegisterModal, setRegisterModalVisibility] = useState(false)

  function handleRegisterModal () {
    setRegisterModalVisibility(!showRegisterModal)
  }

  return (
    <div className="section">
      <BackgroundVideo />
      <img className='center-logo' src="logo_big.png" />
      <div>
        <button>Download</button>
        <button onClick={handleRegisterModal}>Register</button>
      </div>
      <h1>
        Download and Play For Free!
      </h1>
      {showRegisterModal ? <RegisterModal handleVisibility={handleRegisterModal}/> : false}
    </div>
  )
}

export default VideoIntro
