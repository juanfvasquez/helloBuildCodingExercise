const USER_KEY = 'user'
let user

const localData = window.localStorage.getItem(USER_KEY)
if (localData) {
  user = JSON.parse(localData)
}

export const getUser = () => user
export const setUser = user => window.localStorage.setItem(USER_KEY, JSON.stringify(user))