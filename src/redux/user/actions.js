import { SET_USER, SET_FAVS, SET_REPOS } from "./types"

export const setUser = user => ({
  type: SET_USER,
  payload: user
})

export const setRepos = repos => ({
  type: SET_REPOS,
  payload: repos
})

export const setFavs = favs => ({
  type: SET_FAVS,
  payload: favs
})