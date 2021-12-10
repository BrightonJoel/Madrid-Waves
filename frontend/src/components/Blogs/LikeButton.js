import React, { useEffect, useState } from "react"
import { useAuth } from "../../context/AuthContext"
import { useHistory } from "react-router"
import { useMutation } from "@apollo/client"
import { UPDATELIKES } from "../../queries/UpdateLikes"
import useUser from "../../hooks/useUser"

import { AiFillHeart } from "react-icons/ai"
import { HeartContainer } from "../../pages/HomePage/HomePageStyles"

export default function LikeButton({ id, likedUser }) {
  const { setGlobalError } = useAuth()
  const { currentUser } = useUser()
  const history = useHistory()
  const [liked, setLiked] = useState(false)

  const handleUnAuthorized = () => {
    setGlobalError("Please log in to like")
    history.push("/login")
  }

  useEffect(() => {
    if (
      currentUser &&
      likedUser.find((like) => like.username === currentUser.username)
    ) {
      setLiked(true)
    } else setLiked(false)
  }, [currentUser, likedUser])

  const [updateLikes] = useMutation(UPDATELIKES, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  const handleLikes = async (id) => {
    updateLikes({
      variables: {
        id: id,
        UserId: `${currentUser.id}`,
      },
    })
  }

  return (
    <>
      <HeartContainer>
        {currentUser ? (
          <AiFillHeart
            className={`heart ${liked ? "active" : ""}`}
            onClick={() => handleLikes(id)}
          />
        ) : (
          <AiFillHeart className='heart' onClick={handleUnAuthorized} />
        )}
        <span>{likedUser.length}</span>
      </HeartContainer>
    </>
  )
}
