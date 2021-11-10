import React from "react"
import { useQuery } from "@apollo/client"
import YouTube from "./YouTube"
import { GETSINGLEBLOG } from "../../queries/GetSingleBlog"
import { Link } from "react-router-dom"

// styles
import { Container, LatestBlogSection, Content } from "./SingleBlogStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
  Category,
} from "../../pages/HomePage/HomePageStyles"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import LikeButton from "./LikeButton"

export default function SingleBlog() {
  const { data, loading, error } = useQuery(GETSINGLEBLOG)

  if (loading)
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  if (error) return <p>{error.message}</p>
  return (
    <Container>
      {data.blogs.map((blog) => (
        <LatestBlogSection key={blog.id}>
          <h2>Latest</h2>
          <Content>
            <ImageContainer
              h='400px'
              bg={({ theme }) => theme.colors.lightGrey}
            >
              {blog.CoverImage.map((u) => (
                <img
                  key={u.id}
                  src={`http://localhost:1337${u.url}`}
                  alt='Thumbnail'
                />
              ))}
            </ImageContainer>
            <ContentArea>
              <h3>{blog.Title}</h3>
              <Category>
                {blog.blogCategories.map((category) => (
                  <span key={category.id}>{category.Name}</span>
                ))}
              </Category>
              <p>{blog.Body.substring(0, 200) + "..."}</p>
              <hr />
              <ActionArea>
                <LikeButton id={blog.id} likedUser={blog.likedUser} />
                <Link to={`/details/${blog.id}`}>Read More</Link>
              </ActionArea>
            </ContentArea>
          </Content>
        </LatestBlogSection>
      ))}
      <YouTube />
    </Container>
  )
}
