/* eslint-disable no-unused-vars */
import React from 'react'
import VideoIntro from './VideoIntro'

const HomePage = ({setRegisterLoginModal, showRegisterLoginModal}) => {
  return (
    <div>
      <VideoIntro setRegisterLoginModal={setRegisterLoginModal} showRegisterLoginModal={showRegisterLoginModal}/>
    </div>
  )
}

export default HomePage
