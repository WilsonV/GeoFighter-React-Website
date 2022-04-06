/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { me } from '../store/auth'

const Navbar = ({ setRegisterLoginModal, showRegisterLoginModal, isLoggedIn }) => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(me())
  },[])

  return (
    <div className="nav">
      <div className="nav-item">Home</div>
      <div className="nav-item">Forum</div>
      <div className='nav-right'>
        {isLoggedIn ?
          <div className="nav-item">Logout</div> :
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
