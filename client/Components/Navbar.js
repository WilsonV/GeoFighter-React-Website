/* eslint-disable no-unused-vars */
import React from 'react'
import { connect } from 'react-redux'

const Navbar = ({ setRegisterLoginModal, showRegisterLoginModal, isLoggedIn }) => {
  return (
    <div className="nav">
      <div className="nav-item">Home</div>
      <div className="nav-item">Forum</div>
      <div className='nav-right'>
        {isLoggedIn ?
          <div>Logout</div> :
          <div className="nav-item" onClick={() => setRegisterLoginModal(true, true)}>Login</div>
        }
      </div>

    </div>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id
  }
}
export default connect(mapState)(Navbar)
