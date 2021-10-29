import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"

// styles
import {
  Container,
  LatestBlogSection,
  Content,
  LaligaTable,
} from "./SingleBlogStyles"
import {
  ImageContainer,
  HeartContainer,
  ContentArea,
  ActionArea,
} from "../../pages/HomePage/HomePageStyles"
import { AiFillHeart } from "react-icons/ai"

const GETSINGLEBLOGS = gql`
  query GetSingleBlog {
    blogs(where: { id: 1 }) {
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
`

export default function SingleBlog({ handleLikes }) {
  const { data, loading, error } = useQuery(GETSINGLEBLOGS)

  if (loading) return <p>Loading...</p>
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
              <p>{blog.Body.substring(0, 200) + "..."}</p>
              <hr />
              <ActionArea>
                <HeartContainer>
                  <AiFillHeart
                    className={`heart ${blog.isLiked ? "active" : ""}`}
                    onClick={() => handleLikes(blog)}
                  />
                  <span>{blog.Likes}</span>
                </HeartContainer>
                <Link to={`/details/${blog.id}`}>Read More</Link>
              </ActionArea>
            </ContentArea>
          </Content>
        </LatestBlogSection>
      ))}

      <LaligaTable>
        <h2>Laliga</h2>
      </LaligaTable>
    </Container>
  )
}
