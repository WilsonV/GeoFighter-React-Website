/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { logout, me } from '../store/auth'

const Navbar = ({ setRegisterLoginModal, showRegisterLoginModal, isLoggedIn, logoutUser }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(me())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div className="nav">
      <div className="nav-item">Home</div>
      <div className="nav-item">Forum</div>
      <div className='nav-right'>
        {isLoggedIn ?
          <div className="nav-item" onClick={logoutUser}>Logout</div> :
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

const mapDispatch = (dispatch) => {
  return {
    logoutUser(){
      dispatch(logout())
    }
  }
}
export default connect(mapState,mapDispatch)(Navbar)
