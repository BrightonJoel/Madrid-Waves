import React from "react"

import { useAuth } from "../context/AuthContext"

export default function HomePage() {
  const { user } = useAuth()

  return <div>Welcome to the homepage {user.jwt}</div>
}
