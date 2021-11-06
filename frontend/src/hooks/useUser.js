import { useEffect, useState } from "react"
import { loginApi } from "./loginApi"

const useUser = () => {
  const [currentUser, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    const fetchUser = async () => {
      const { loading, data } = await loginApi("users/me", "GET")

      if (!data) setLoading(loading)
      setUser(data)
      setLoading(loading)
    }
    fetchUser()

    return () => {
      setUser(null)
    }
  }, [])

  return { currentUser, loading }
}

export default useUser
