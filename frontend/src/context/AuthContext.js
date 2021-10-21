import React, { useContext } from "react"
import { registerApi } from "../hooks/registerApi"
import { callApi } from "../hooks/callApi"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
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
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
