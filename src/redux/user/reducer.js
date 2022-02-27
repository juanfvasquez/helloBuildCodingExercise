import {SET_USER, SET_FAVS, SET_REPOS} from './types'

const INITIAL_STATE = {
  user: null,
  repos: [],
  favs: []
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload
      }
    case SET_REPOS:
      return {
        ...state,
        repos: action.payload
      }
    case SET_FAVS:
      return {
        ...state,
        favs: action.payload
      }
    default:
      return state
  }
}