import axios from "axios"

export const TOKEN = 'geofightertoken'

const SET_AUTH = 'SET_AUTH'

const setAuth = auth => ({type: SET_AUTH, auth})

export const me = () => async dispatch => {
  const token = window.localStorage.getItem(TOKEN)
  if(token){
    const res = await axios.get('/auth/me',{
      headers: {
        authorization: token
      }
    })
    return dispatch(setAuth(res.data))
  }
}

export default function(state={}, action){
  switch(action.type){
    default:
      return state
  }
}
