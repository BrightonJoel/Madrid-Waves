import React from "react"
import { useQuery, gql } from "@apollo/client"
import { Link } from "react-router-dom"
import LikeButton from "./LikeButton"

// styles
import {
  Container,
  LatestBlogSection,
  Content,
  LaligaTable,
} from "./SingleBlogStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
} from "../../pages/HomePage/HomePageStyles"

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
      likes {
        id
        UserName
      }
      Views
    }
  }
`

export default function SingleBlog() {
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
                <LikeButton id={blog.id} likes={blog.likes} />
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
