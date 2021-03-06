import React from "react"
import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Views from "../../components/Blogs/Views"
import Comment from "../../components/Blogs/Comments/Comment"

// Queries
import { GETSINGLEBLOGWITHID } from "../../queries/BlogDetailsQuery"

// Styles
import {
  Container,
  Banner,
  BlogCover,
  Description,
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
    <>
      <Banner>
        <BlogCover>
          <img
            src={`${process.env.REACT_APP_SHORT_URL}${data.blog.CoverImage[0].url}`}
            alt='Thumbnail'
          />

          <Description>
            <Title>{data.blog.Title}</Title>
            <BlogHead>
              <strong>By {data.blog.Author.username}</strong>
              <p>
                {new Date(data.blog.created_at).toLocaleDateString("en-us", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </BlogHead>
            <ActionContainer>
              <LikeButton id={id} likedUser={data.blog.likedUser} />
              <Views id={id} view={data.blog.Views} />
              <ShareButton />
            </ActionContainer>
          </Description>
        </BlogCover>
      </Banner>

      <Container>
        <Post>
          <ReactMarkdown
            children={data.blog.Body}
            remarkPlugins={[remarkGfm]}
          />
        </Post>

        <Comment id={id} />
      </Container>
    </>
  )
}
