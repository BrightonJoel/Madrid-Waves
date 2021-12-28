import React from "react"
import { Link, useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { FETCHBYCATEGORY } from "../../queries/FetchByCategory"
import FilterButton from "../Blogs/FilterButton"

// Styles
import { BlogsWrapper, BlogContainer, Blog } from "../Blogs/Home/BlogsStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
  Category,
} from "../../pages/HomePage/HomePageStyles"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import LikeButton from "../Blogs/LikeButton"

export default function CategoryBlogs() {
  const { id } = useParams()

  const { loading, error, data } = useQuery(FETCHBYCATEGORY, {
    variables: { where: { blogCategories: { id: id } } },
  })

  if (loading)
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  if (error) return <p>{error.message}</p>
  return (
    <BlogsWrapper>
      <BlogContainer>
        <FilterButton />
        {data.blogs.map((blog) => (
          <Blog key={blog.id}>
            <ImageContainer
              h='300px'
              bg={({ theme }) => theme.colors.secondary}
            >
              {blog.CoverImage.map((u) => (
                <img
                  key={u.id}
                  src={`${process.env.REACT_APP_SHORT_URL}${u.url}`}
                  alt='Thumbnail'
                />
              ))}
            </ImageContainer>
            <ContentArea p='20px' bg={({ theme }) => theme.colors.secondary}>
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
