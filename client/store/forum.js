import axios from 'axios'
import { TOKEN } from './auth'
const SET_CATEGORIES = 'SET_CATEGORIES'

const setCategories = categories => ({ type: SET_CATEGORIES, categories })

export const getForumCategories = () => async dispatch => {
  try {
    console.log("getting categories...")
    const token = window.localStorage.getItem(TOKEN)
    if (!token) throw "Un-authorized Access"
    const res = await axios.get('/forum/categories', {
      headers: {
        authorization: token
      }
    })
    dispatch(setCategories(res.data))
  } catch (error) {
    console.log('Failed to load forum categories')
    dispatch(setCategories({}))
  }
}

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.categories }
    default:
      return state
  }
}
