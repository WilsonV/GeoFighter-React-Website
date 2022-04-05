/* eslint-disable no-unused-vars */
import React from 'react'

const Navbar = ({setRegisterLoginModal, showRegisterLoginModal}) => {
  return (
    <div className="nav">
      <div className="nav-item">Home</div>
      <div className="nav-item">Forum</div>
      <div className='nav-right'>
        <div className="nav-item" onClick={()=>setRegisterLoginModal(true,true)}>Login</div>
      </div>

    </div>
  )
}

export default Navbar
