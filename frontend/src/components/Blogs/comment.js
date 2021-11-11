import React, { useRef } from "react"
import remarkGfm from "remark-gfm"
import { CREATECOMMENT, GETCOMMENTS } from "../../queries/BlogDetailsQuery"
import ReactMarkdown from "react-markdown"
import { useQuery, useMutation } from "@apollo/client"
import useUser from "../../hooks/useUser"

// Styles
import { CommentBox, Avatar, Profile } from "./commentStyles"
import { CommenTitle } from "../../pages/BlogPages/BlogDetailsStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FaTelegramPlane } from "react-icons/fa"

export default function Comment({ id }) {
  const { currentUser } = useUser()
  const commentText = useRef()

  const { data, loading, error } = useQuery(GETCOMMENTS, {
    variables: { id: id },
  })

  const [CreateComment] = useMutation(CREATECOMMENT, {
    refetchQueries: [GETCOMMENTS],
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  function handleComment() {
    CreateComment({
      variables: {
        commentText: commentText.current.value,
        blog: id,
        commentedUser: currentUser.id,
      },
    })
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <CommenTitle>Comments</CommenTitle>
      <br />
      <textarea rows='7' ref={commentText}></textarea>

      <h6>
        <Button
          bg={({ theme }) => theme.colors.yellow}
          clr={({ theme }) => theme.colors.primaryBlue}
          onClick={handleComment}
        >
          Comment <FaTelegramPlane />
        </Button>
      </h6>

      {data.comments.map((comment) => (
        <CommentBox key={comment.id}>
          <Profile>
            <Avatar>
              <h1>{comment.commentedUser.username.charAt(0)}</h1>
            </Avatar>
            <h2>{comment.commentedUser.username}</h2>
          </Profile>

          <br />
          <ReactMarkdown
            children={comment.commentText}
            remarkPlugins={[remarkGfm]}
          />
        </CommentBox>
      ))}
    </>
  )
}
