import React from "react"
import { useQuery } from "@apollo/client"
import { GETSINGLEBLOG } from "../../queries/GetSingleBlog"
import { Link } from "react-router-dom"
import { BiLoaderAlt } from "react-icons/bi"

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
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import LikeButton from "./LikeButton"

export default function SingleBlog() {
  const { data, loading, error } = useQuery(GETSINGLEBLOG)

  if (loading)
    return (
      <SpinnerContainer>
        {/* <BiLoaderAlt className='loader' /> */}
        <img src='/img/Logo-Transparent.svg' alt='loader' />
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

      <LaligaTable>
        <h2>Laliga</h2>
      </LaligaTable>
    </Container>
  )
}
