import React from "react"
import UserBlogs from "../../components/Blogs/UserBlogs"
import useUser from "../../hooks/useUser"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"

export default function MyBlogs() {
  const { currentUser, loading } = useUser()

  if (loading)
    return (
      <SpinnerContainer>
        {/* <BiLoaderAlt className='loader' /> */}
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  return (
    <>
      <UserBlogs userId={currentUser.id} username={currentUser.username} />
    </>
  )
}
