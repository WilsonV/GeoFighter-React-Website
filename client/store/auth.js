import axios from "axios"

export const TOKEN = 'geofightertoken'

const SET_AUTH = 'SET_AUTH'

const setAuth = auth => ({ type: SET_AUTH, auth })

export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export const authenticateLogin = (username, password) => async dispatch => {
  try {
    //console.log("made it in to authenticate")
    const res = await axios.post('/auth/login', { username, password })
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (error) {
    console.log("Error from auth login", error.response)
    dispatch(setAuth({ error: error }))
  }
}

export const authenticateRegister = (userInfo) => async dispatch => {
  try {
    const res = await axios.post('/auth/register', userInfo)
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (error) {
    return dispatch(setAuth({ error: error }))
  }
}

export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  return setAuth({})
}

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth
    default:
      return state
  }
}
