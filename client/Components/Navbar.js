/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { logout, me } from '../store/auth'

const Navbar = ({ setRegisterLoginModal, isLoggedIn, logoutUser, loggedInUsername }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(me())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="nav">
      <Link to='/' className="nav-item">Home</Link>
      <Link to='/forum' className="nav-item">Forum</Link>
      <div className='nav-right'>
        {isLoggedIn ?
          <div>
            <div className='nav-user'>{loggedInUsername},</div>
            <div className="nav-item" onClick={logoutUser}>Logout</div>
          </div> :
          <div className="nav-item" onClick={() => setRegisterLoginModal(true, true)}>Login</div>
        }
      </div>

    </div>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    loggedInUsername: state.auth.username
  }
}

const mapDispatch = (dispatch) => {
  return {
    logoutUser() {
      dispatch(logout())
    }
  }
}
export default connect(mapState, mapDispatch)(Navbar)
