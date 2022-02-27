import {Routes, Route, Navigate} from "react-router-dom"
import {useSelector} from "react-redux"

import Login from './pages/login'
import Signup from './pages/signup'
import Profile from './pages/profile'

function App() {
  const user = useSelector(({ user }) => user.user)

  return <Routes>
    {!user && <Route path="login" element={<Login />} />}
    {!user && <Route path="sign-up" element={<Signup />} />}
    {user && <Route path="profile" element={<Profile />} />}
    <Route path="*" element={<Navigate to={user ? "profile" : "login"} />} />
  </Routes>
}

export default App;
