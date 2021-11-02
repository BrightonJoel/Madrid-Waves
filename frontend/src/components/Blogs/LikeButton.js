import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"
import { useMutation, gql } from "@apollo/client"
import useUser from "../../hooks/useUser"

import { AiFillHeart } from "react-icons/ai"
import { HeartContainer } from "../../pages/HomePage/HomePageStyles"

const UPDATELIKES = gql`
  mutation UpdateLikes($id: ID!, $UserName: String) {
    likePost(id: $id, UserName: $UserName) {
      id
      Title
      Body
      CoverImage {
        id
        url
      }
      likes {
        id
        UserName
      }
      Views
    }
  }
`

export default function LikeButton({ id, likes }) {
  const { currentUser } = useUser()
  const history = useHistory()
  const [liked, setLiked] = useState(false)

  useEffect(() => {
    if (
      currentUser &&
      likes.find((like) => like.UserName === currentUser.username)
    ) {
      setLiked(true)
    } else setLiked(false)
  }, [currentUser, likes])

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
        UserName: `${currentUser.username}`,
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
          <AiFillHeart
            className='heart'
            onClick={() => history.push("/login")}
          />
        )}
        <span>{likes.length}</span>
      </HeartContainer>
    </>
  )
}
