import axios from 'axios'
import { TOKEN } from './auth'
const SET_CATEGORIES = 'SET_CATEGORIES'
const SET_THREADS = 'SET_THREADS'
const SET_THREADPOST = 'SET_THREADPOST'

const setCategories = categories => ({ type: SET_CATEGORIES, categories })
const setThreads = threads => ({ type: SET_THREADS, threads })
const setThreadPost = threadPosts => ({ type: SET_THREADPOST, threadPosts })

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
    dispatch(setCategories([]))
  }
}

export const getSectionThreads = (sectionId) => async dispatch => {
  try {
    console.log("loading section", sectionId)
    const token = window.localStorage.getItem(TOKEN)
    if (!token) throw "Un-authorized Access"
    const res = await axios.get('/forum/threads', {
      headers: {
        authorization: token
      },
      params: {
        sectionId
      }
    })
    dispatch(setThreads(res.data))
  } catch (error) {
    console.log("Failed to load section threads")
    dispatch(setThreads([]))
  }
}

export const getThreadPosts = (threadId) => async dispatch => {
  try {
    const token = window.localStorage.getItem(TOKEN)
    if (!token) throw "Un-authorized Access"
    const res = await axios.get('/forum/posts', {
      headers: {
        authorization: token
      },
      params: {
        threadId
      }
    })
    console.log("Thread post data", res.data)
    dispatch(setThreadPost(res.data))
  } catch (error) {
    console.log("Failed to load thread posts")
    dispatch(setThreadPost([]))
  }
}

export default function (state = {}, action) {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.categories }
    case SET_THREADS:
      return { ...state, threads: action.threads }
    case SET_THREADPOST:
      return { ...state, threadPosts: action.threadPosts }
    default:
      return state
  }
}
