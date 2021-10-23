import React from "react"
import { Link } from "react-router-dom"

import useUser from "../hooks/useUser"
import { useAuth } from "../context/AuthContext"

export default function HomePage() {
  const { currentUser, loading } = useUser()
  const { logout } = useAuth()
  console.log(currentUser, loading)

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {currentUser ? (
        <p>Welcome to the home page {currentUser.username}</p>
      ) : (
        <Link to='/login'>Login / signup</Link>
      )}
      <button onClick={logout}>logout</button>
    </div>
  )
}
