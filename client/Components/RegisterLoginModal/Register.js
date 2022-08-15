import React, { useEffect } from 'react'
import { connect } from "react-redux"
import { authenticateRegister } from '../../store/auth'

function Register({ setRegisterLoginModal, attemptRegister, isLoggedIn, error }) {

  useEffect(() => {
    if (isLoggedIn) setRegisterLoginModal(false, false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return (
    <>
      <form onSubmit={attemptRegister}>
        {error && error.response && <div>{error.response.data}</div>}
        <input type="text" name='username' required maxLength={12} minLength={4} placeholder='Username'></input>
        <input type="email" name='email' required placeholder='Email'></input>
        <input type="password" name='password' required placeholder='Password'></input>
        <input type="password" required placeholder='Confirm Password'></input>
        <div>
          <button onClick={() => setRegisterLoginModal(true, true)}>Login Instead</button>
          <button type='submit'>Register</button>
        </div>
      </form>
    </>
  )
}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    error: state.auth.error
  }
}

const mapDispatch = (dispatch) => {

  return {
    async attemptRegister(evt) {
      evt.preventDefault()
      await dispatch(authenticateRegister({
        username: evt.target.username.value,
        email: evt.target.email.value,
        password: evt.target.password.value,
      }))
    }
  }
}

export default connect(mapState, mapDispatch)(Register)
