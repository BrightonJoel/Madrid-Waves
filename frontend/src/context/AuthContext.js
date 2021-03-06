import React, { useState, useContext } from "react"
import { useHistory } from "react-router"

import { loginApi } from "../hooks/loginApi"
import { registerApi } from "../hooks/registerApi"

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [globalError, setGlobalError] = useState(null)
  const history = useHistory()

  async function signUp(userDetails) {
    const path = process.env.REACT_APP_SIGNUP_PATH
    return await registerApi(path, "POST", userDetails)
  }

  async function login(userDetails) {
    const path = process.env.REACT_APP_LOGIN_PATH
    return await loginApi(path, "POST", userDetails)
  }

  async function logout() {
    const path = process.env.REACT_APP_LOGOUT
    const { error } = await loginApi(path, "POST")
    history.push("/login")
    return error
  }

  const value = {
    signUp,
    login,
    logout,
    globalError,
    setGlobalError,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
