import React from "react"
import { useMutation, gql } from "@apollo/client"
import useUser from "../../hooks/useUser"
import SingleBlog from "../../components/Blogs/SingleBlog"
import Blogs from "../../components/Blogs/Blogs"

const UPDATELIKES = gql`
  mutation UpdateLikes(
    $id: ID!
    $Likes: Int!
    $isLiked: Boolean!
    $UserId: Int
  ) {
    updateBlog(
      input: {
        where: { id: $id }
        data: { Likes: $Likes, isLiked: $isLiked, UserId: $UserId }
      }
    ) {
      blog {
        id
        Title
        Body
        CoverImage {
          id
          url
        }
        Likes
        Views
        isLiked
        UserId
      }
    }
  }
`

export default function HomePage() {
  const { currentUser, loading } = useUser()

  // Updating likes
  const [
    updateLikes,
    { data: updateData, loading: updateLoad, error: updateError },
  ] = useMutation(UPDATELIKES, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  const handleLikes = (blog) => {
    updateLikes({
      variables: {
        id: blog.id,
        UserId: currentUser.id,
        Likes: blog.isLiked ? blog.Likes - 1 : blog.Likes + 1,
        isLiked: blog.UserId === currentUser.id && blog.isLiked ? false : true,
      },
    })
    console.log(updateData, updateLoad, updateError)
  }

  return (
    <>
      <SingleBlog handleLikes={handleLikes} />
      <Blogs handleLikes={handleLikes} />
    </>
  )
}
