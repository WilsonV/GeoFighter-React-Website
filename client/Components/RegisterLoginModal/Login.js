import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { authenticateLogin } from '../../store/auth'

function Login ({ setRegisterLoginModal, attemptLogin, isLoggedIn, error }) {
  // const amILoggedIn = useSelector(state => {
  //   console.log("Auth is",state.auth)
  //   return !!state.auth.id})

  useEffect(() => {
    // console.log("is logged in",isLoggedIn(), "am i logged in", amILoggedIn)
    if (isLoggedIn)setRegisterLoginModal(false, false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn])

  return (
    <>
      <form onSubmit={attemptLogin}>
        {error && error.response && <div>{error.response.data}</div>}
        <input type="text" name='username' required maxLength={12} minLength={4} placeholder='Username'></input>
        <input type="password" name='password' required minLength={4} placeholder='Password'></input>
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
    isLoggedIn: !!state.auth.id,
    error: state.auth.error
  }
}
const mapDispatch = (dispatch) => {
  return {
    async attemptLogin (evt) {
      evt.preventDefault()
      const username = evt.target.username.value
      const password = evt.target.password.value
      await dispatch(authenticateLogin(username, password))
    }
  }
}

export default connect(mapState, mapDispatch)(Login)
