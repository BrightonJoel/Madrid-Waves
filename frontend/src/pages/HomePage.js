import React from "react"
import { Link } from "react-router-dom"

import useUser from "../hooks/useUser"
import { useAuth } from "../context/AuthContext"
import { Button } from "../styles/GlobalComponents/Button"

export default function HomePage() {
  const { currentUser, loading } = useUser()
  const { logout } = useAuth()

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div>
      {currentUser ? (
        <>
          <p>Welcome to the home page {currentUser.username}</p>
          <Button
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.neutral}
            mt='0px'
            onClick={logout}
          >
            logout
          </Button>
        </>
      ) : (
        <Link to='/login'>Login / signup</Link>
      )}
    </div>
  )
}
