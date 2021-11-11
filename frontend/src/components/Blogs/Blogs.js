import React from "react"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GETBLOGS } from "../../queries/GetAllBlogs"
import FilterButton from "./FilterButton"

// Styles
import { BlogsWrapper, BlogContainer, Blog } from "./BlogsStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
  Category,
} from "../../pages/HomePage/HomePageStyles"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import { ErrorContainer } from "../../styles/GlobalComponents/Errors"
import LikeButton from "./LikeButton"

export default function Blogs() {
  const { loading, error, data } = useQuery(GETBLOGS)

  if (loading)
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )

  if (error)
    return (
      <ErrorContainer>
        <img src='/img/Error.svg' alt='Fetch Error' />
        <h2>{error.message}</h2>
      </ErrorContainer>
    )

  return (
    <BlogsWrapper>
      <BlogContainer>
        <FilterButton />
        {data.blogs.map((blog) => (
          <Blog key={blog.id}>
            <ImageContainer h='300px' bg={({ theme }) => theme.colors.neutral}>
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
              <Category>
                {blog.blogCategories.map((category) => (
                  <span key={category.id}>{category.Name}</span>
                ))}
              </Category>

              <p>{blog.Body.substring(0, 250) + "..."}</p>
              <hr />
              <ActionArea>
                <LikeButton id={blog.id} likedUser={blog.likedUser} />
                <Link to={`/details/${blog.id}`}>Read More</Link>
              </ActionArea>
            </ContentArea>
          </Blog>
        ))}
      </BlogContainer>
    </BlogsWrapper>
  )
}
