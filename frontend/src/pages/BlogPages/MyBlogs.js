import React from "react"
import UserBlogs from "../../components/Blogs/MyBlogs/UserBlogs"
import { Redirect } from "react-router"
import useUser from "../../hooks/useUser"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"

export default function MyBlogs() {
  const { currentUser, loading } = useUser()

  if (loading)
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )

  return (
    <>
      {currentUser ? (
        <UserBlogs userId={currentUser.id} />
      ) : (
        <Redirect to='/login' />
      )}
    </>
  )
}
