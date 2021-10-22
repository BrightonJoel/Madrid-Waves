import React, { useContext, useState } from "react"
import { callApi } from "../hooks/callApi"
import { registerApi } from "../hooks/registerApi"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)

  function saveUser(user) {
    setUser(user)
  }
  console.log(user)
  async function signUp(userDetails) {
    const path = "auth/local/register"
    return await registerApi(path, "POST", userDetails)
  }
  async function login(userDetails) {
    const path = "auth/local"
    return await callApi(path, "POST", userDetails)
  }

  const value = {
    signUp,
    login,
    saveUser,
    user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
