import React from 'react'
import BackgroundVideo from './BackgroundVideo'

const VideoIntro = () => {
  return (
    <div className="section">
      <BackgroundVideo />
      <img className='center-logo' src="logo_big.png" />
      <div>
        <button>Download</button>
        <button>Register</button>
      </div>
      <h1>
        Download and Play For Free!
      </h1>
    </div>
  )
}

export default VideoIntro
