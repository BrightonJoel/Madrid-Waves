import { useEffect, useState } from "react"

const useUser = () => {
  const [currentUser, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const loggedInUser = localStorage.getItem("user")

    if (loggedInUser === null) {
      setLoading(false)
    }
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser)
      setUser(foundUser)
      setLoading(false)
    }
  }, [])

  return { currentUser, loading }
}

export default useUser
