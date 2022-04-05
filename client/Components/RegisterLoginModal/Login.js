import React from 'react'
import { connect } from 'react-redux'
import { authenticateLogin } from '../../store/auth'

function Login({ setRegisterLoginModal, attemptLogin, error }) {
  return (
    <>
      <form onSubmit={attemptLogin}>
        {error && error.response && <div>{error.response.data}</div>}
        <input type="text" name='username' maxLength={12} placeholder='Username'></input>
        <input type="password" name='password' placeholder='Password'></input>
        <div>
          <button onClick={() => setRegisterLoginModal(true, false)}>Register Instead</button>
          <button type='submit'>Login</button>
        </div>
      </form>
    </>
  )
}

const mapState = (state) => {

  return {
    error: state.auth.error
  }
}
const mapDispatch = (dispatch) => {
  return {
    attemptLogin(evt) {
      evt.preventDefault()
      const username = evt.target.username.value
      const password = evt.target.password.value
      console.log("made it to dispatch")
      dispatch(authenticateLogin(username, password))
      console.log("finished dispatch")
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
