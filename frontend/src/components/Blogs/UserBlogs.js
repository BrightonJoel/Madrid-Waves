import React from "react"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GETUSERBLOGS } from "../../queries/GetUserBlogs"

import {
  BlogsWrapper,
  BlogContainer,
  Blog,
  Title,
  NoBlogImgContainer,
} from "./BlogsStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
} from "../../pages/HomePage/HomePageStyles"
import LikeButton from "./LikeButton"

export default function UserBlogs({ userId, username }) {
  const { loading, error, data } = useQuery(GETUSERBLOGS, {
    variables: { where: { Author: userId } },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>{error.message}</p>

  return (
    <BlogsWrapper>
      <BlogContainer>
        <Title>My Blogs</Title>

        {data.blogs.length === 0 ? (
          <NoBlogImgContainer>
            <img src='/img/No-blogs.svg' alt='no-blogs' />
          </NoBlogImgContainer>
        ) : (
          data.blogs.map((blog) => (
            <Blog key={blog.id}>
              <ImageContainer
                h='300px'
                bg={({ theme }) => theme.colors.neutral}
              >
                {blog.CoverImage.map((u) => (
                  <img
                    key={u.id}
                    src={`http://localhost:1337${u.url}`}
                    alt='Thumbnail'
                  />
                ))}
              </ImageContainer>
              <ContentArea p='20px' bg={({ theme }) => theme.colors.neutral}>
                <h3>{blog.Title}</h3>
                <p>{blog.Body.substring(0, 250) + "..."}</p>
                <hr />
                <ActionArea>
                  <LikeButton id={blog.id} likedUser={blog.likedUser} />
                  <Link to={`/details/${blog.id}`}>Read More</Link>
                </ActionArea>
              </ContentArea>
            </Blog>
          ))
        )}
      </BlogContainer>
    </BlogsWrapper>
  )
}
