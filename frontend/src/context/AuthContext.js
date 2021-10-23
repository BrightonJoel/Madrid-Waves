import React, { useContext, useState } from "react"
import { useHistory } from "react-router"
import { callApi } from "../hooks/callApi"
import { registerApi } from "../hooks/registerApi"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const history = useHistory()

  function saveUser(user) {
    if (user !== null) {
      localStorage.setItem("user", JSON.stringify(user.user))
      setUser(user)
      console.log(user)
    }
    return
  }

  async function signUp(userDetails) {
    const path = "auth/local/register"
    return await registerApi(path, "POST", userDetails)
  }

  async function login(userDetails) {
    const path = "auth/local"
    return await callApi(path, "POST", userDetails)
  }

  async function logout() {
    const path = "logout"
    localStorage.clear()
    const res = await callApi(path, "POST")
    console.log(res)
    history.push("/login")
  }

  const value = {
    signUp,
    login,
    saveUser,
    logout,
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
