import React from "react"
import UserBlogs from "../../components/Blogs/UserBlogs"
import useUser from "../../hooks/useUser"

export default function MyBlogs() {
  const { currentUser, loading } = useUser()

  if (loading) return <p>Loading...</p>
  return (
    <>
      <UserBlogs userId={currentUser.id} username={currentUser.username} />
    </>
  )
}
