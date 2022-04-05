import React, { useEffect, useState } from 'react'
import BackgroundVideo from './BackgroundVideo'
import RegisterLoginModal from './RegisterLoginModal'

const VideoIntro = ({setRegisterLoginModal, showRegisterLoginModal}) => {


  return (
    <div className="section">
      <BackgroundVideo />
      <img className='center-logo' src="logo_big.png" />
      <div>
        <button>Download</button>
        <button onClick={()=>setRegisterLoginModal(true,false)}>Register</button>
      </div>
      <h1>
        Download and Play For Free!
      </h1>
      {showRegisterLoginModal.show ? <RegisterLoginModal setRegisterLoginModal={setRegisterLoginModal} login={showRegisterLoginModal.login}/> : false}
    </div>
  )
}

export default VideoIntro
