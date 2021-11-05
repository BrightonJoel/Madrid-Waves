import React from "react"
import { useQuery } from "@apollo/client"
import { Link } from "react-router-dom"
import { GETBLOGS } from "../../queries/GetAllBlogs"
import { BiLoaderAlt } from "react-icons/bi"

import { BlogsWrapper, BlogContainer, BlogHeader, Blog } from "./BlogsStyles"
import {
  ImageContainer,
  ContentArea,
  ActionArea,
} from "../../pages/HomePage/HomePageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"
import { FaFilter } from "react-icons/fa"
import LikeButton from "./LikeButton"

export default function Blogs() {
  const { loading, error, data } = useQuery(GETBLOGS)

  if (loading)
    return (
      <SpinnerContainer>
        {/* <BiLoaderAlt className='loader' /> */}
        <img src='/img/Logo-Transparent.svg' alt='loader' />
      </SpinnerContainer>
    )
  if (error) return <p>{error.message}</p>

  return (
    <BlogsWrapper>
      <BlogContainer>
        <BlogHeader>
          <h2>Blogs</h2>
          <Button
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.neutral}
          >
            Filter
            <FaFilter className='filter' />
          </Button>
        </BlogHeader>

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
