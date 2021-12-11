import React, { useRef, useState } from "react"
import remarkGfm from "remark-gfm"
import { CREATECOMMENT, GETCOMMENTS } from "../../../queries/BlogDetailsQuery"
import ReactMarkdown from "react-markdown"
import { useQuery, useMutation } from "@apollo/client"
import useUser from "../../../hooks/useUser"

// Styles
import {
  CommentBox,
  ErrorText,
  Avatar,
  Profile,
  BtnContainer,
} from "./CommentStyles"
import { SpinnerContainer } from "../../../styles/GlobalComponents/Spinner"
import { CommenTitle } from "../../../pages/BlogPages/BlogDetailsStyles"
import { Button } from "../../../styles/GlobalComponents/Button"
import { FaTelegramPlane, FaLock } from "react-icons/fa"

export default function Comment({ id }) {
  const { currentUser } = useUser()
  const [commentError, setCommentError] = useState(null)
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
    if (commentText.current.value === "") {
      setCommentError("Comment cannot be empty!")
      setTimeout(() => {
        setCommentError(null)
      }, 3000)
      return
    }

    CreateComment({
      variables: {
        commentText: commentText.current.value,
        blog: id,
        commentedUser: currentUser.id,
      },
    })

    commentText.current.value = ""
  }

  if (loading)
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  if (error) return <p>{error.message}</p>

  return (
    <>
      <CommenTitle>Comments</CommenTitle>
      {commentError && <ErrorText>{commentError}</ErrorText>}
      <textarea
        rows='7'
        ref={commentText}
        placeholder='Please be respectful in comments'
      ></textarea>

      <BtnContainer>
        {currentUser ? (
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.text}
            onClick={handleComment}
          >
            Comment <FaTelegramPlane />
          </Button>
        ) : (
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.text}
            disabled
          >
            comment <FaLock />
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
