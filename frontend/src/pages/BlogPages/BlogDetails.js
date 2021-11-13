import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Views from "../../components/Blogs/Views"
import Comment from "../../components/Blogs/comment"

// Queries
import { GETSINGLEBLOGWITHID } from "../../queries/BlogDetailsQuery"

// Styles
import {
  MainDiv,
  Post,
  ActionContainer,
  BlogHead,
  Title,
} from "./BlogDetailsStyles"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import LikeButton from "../../components/Blogs/LikeButton"
import ShareButton from "../../components/Blogs/ShareButton"

export default function BlogsDetails() {
  const { id } = useParams()

  const { data, loading, error } = useQuery(GETSINGLEBLOGWITHID, {
    variables: { id: id },
  })

  if (loading) {
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  }

  if (error) return <p>{error.message}</p>

  return (
    <MainDiv>
      <Title>{data.blog.Title}</Title>
      <BlogHead>
        <p>By {data.blog.Author.username}</p>
        <p>
          {new Date(data.blog.created_at).toLocaleDateString("en-us", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
      </BlogHead>

      <Post>
        <img
          src={`http://localhost:1337${data.blog.CoverImage[0].url}`}
          alt='Thumbnail'
        />
        <ReactMarkdown children={data.blog.Body} remarkPlugins={[remarkGfm]} />

        <ActionContainer>
          <LikeButton id={id} likedUser={data.blog.likedUser} />
          <Views id={id} view={data.blog.Views} />
          <ShareButton />
        </ActionContainer>
      </Post>

      <Comment id={id} />
    </MainDiv>
  )
}
