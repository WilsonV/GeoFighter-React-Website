import React from 'react'

const BackgroundVideo = () => {
  function addStartPoint (video) {
    video.target.addEventListener('loadedmetadata', function () {
      this.currentTime = 10
    }, false)

    video.target.addEventListener('timeupdate', function () {
      if (this.currentTime >= 94) { this.currentTime = 10 }
    }, false)
  }

  return (
      <video onLoadStart={addStartPoint} id="background-video" width="100%" height="100%" autoPlay={true} muted={true} loop={true}>
        <source src="BackgroundVideo.mp4" type="video/mp4"></source>
      </video>

  )
}

export default BackgroundVideo
