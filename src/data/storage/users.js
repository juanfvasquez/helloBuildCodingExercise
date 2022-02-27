import md5 from 'md5'
let users = []

const localData = window.localStorage.getItem('users')
if (localData) {
  users = JSON.parse(localData)
}

export const createUser = ({name, username, password}) => {
  const user = {
    name,
    username,
    password: md5(password)
  }
  users.push(user)
  window.localStorage.setItem('users', JSON.stringify(users))
}

export const findUser = (username, password) => {
  const user = users.find(user => user.username === username)
  if (!user) {
    return {error: 1, message: 'Usuario no encontrado'}
  }
  if (user && user.password === md5(password)) {
    return {user, error: 0}
  }
  return {error: 1, message: 'Contraseña incorrecta'}
}

export const validateIfExists = username => {
  const user = users.find(user => user.username === username)
  return Boolean(user)
}

export const validateInfo = ({name, username, password}) => {
  const messages = []
  if (!name) {
    messages.push('El nombre es requerido')
  }
  if (!username) {
    messages.push('El usuario es requerido')
  }
  if (!password || password.length < 6) {
    messages.push('La contraseña es requerida y debe tener al menos 6 caracteres')
  }
  if (messages.length > 0) {
    return messages.join('. ')
  }
  return null
}