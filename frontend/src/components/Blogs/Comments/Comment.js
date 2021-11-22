import React, { useRef } from "react"
import remarkGfm from "remark-gfm"
import { CREATECOMMENT, GETCOMMENTS } from "../../../queries/BlogDetailsQuery"
import ReactMarkdown from "react-markdown"
import { useQuery, useMutation } from "@apollo/client"
import useUser from "../../../hooks/useUser"
import { useHistory } from "react-router"

// Styles
import { CommentBox, Avatar, Profile, BtnContainer } from "./CommentStyles"
import { CommenTitle } from "../../../pages/BlogPages/BlogDetailsStyles"
import { Button } from "../../../styles/GlobalComponents/Button"
import { FaTelegramPlane } from "react-icons/fa"

export default function Comment({ id }) {
  const { currentUser } = useUser()
  const history = useHistory()
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

    commentText.current.value = ""
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <>
      <CommenTitle>Comments</CommenTitle>
      <br />
      <textarea rows='7' ref={commentText}></textarea>

      <BtnContainer>
        {currentUser ? (
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
            onClick={handleComment}
          >
            Comment <FaTelegramPlane />
          </Button>
        ) : (
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
            onClick={() => history.push("/login")}
          >
            Login to comment <FaTelegramPlane />
          </Button>
        )}
      </BtnContainer>

      {data.comments.map((comment) => (
        <CommentBox key={comment.id}>
          <Profile>
            <Avatar>
              <h1>{comment.commentedUser.username.charAt(0)}</h1>
            </Avatar>
            <h2>{comment.commentedUser.username}</h2>
            <p>
              {new Date(comment.published_at).toLocaleDateString("en-us", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
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
