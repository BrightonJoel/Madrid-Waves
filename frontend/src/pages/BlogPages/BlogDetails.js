import React from "react";
import {
  MainDiv,
  Post,
  Heart,
  Views,
  CommenTitle,
  CommentBox,
} from "./BlogDetailsStyles";
import {
  FaFacebook,
  FaTwitter,
  FaShare,
  FaEye,
  FaHeart,
  FaTelegramPlane,
} from "react-icons/fa";
import { Button } from "../../styles/GlobalComponents/Button";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner";

const GETSINGLEBLOGWITHID = gql`
  query GetSingleBlog($id: ID!) {
    blog(id: $id) {
      id
      Title
      Body
      CoverImage {
        id
        url
      }
      likedUser {
        id
        username
      }
      Views
      Author {
        username
      }
      created_at
    }
  }
`;

export default function BlogsDetails() {
  const { id } = useParams();
  const {
    data: CurrentBlogData,
    loading: LoadingCurrentBlog,
    error: BlogLoadingError,
  } = useQuery(GETSINGLEBLOGWITHID, {
    variables: { id: id },
  });

  if (LoadingCurrentBlog)
    return (
      <SpinnerContainer>
        <img src="/img/Logo-Spinner.svg" alt="loader" />
      </SpinnerContainer>
    );
  if (BlogLoadingError) return <p>{BlogLoadingError.message}</p>;
  console.log(CurrentBlogData.blog.CoverImage[0]);

  return (
    <MainDiv>
      <h1>{CurrentBlogData.blog.Title}</h1>
      <br />
      <p>
        {" "}
        Author: {CurrentBlogData.blog.Author.username} | created at:{" "}
        {new Date(CurrentBlogData.blog.created_at) + " "}
      </p>
      <br />

      <h3>
        <FaFacebook />
      </h3>
      <h3>
        <FaTwitter />
      </h3>
      <h4>
        <FaShare />
      </h4>

      <Post>
        <img
          key={CurrentBlogData.blog.CoverImage[0].id}
          src={`http://localhost:1337${CurrentBlogData.blog.CoverImage[0].url}`}
          alt="Thumbnail"
        />

        <p>
          {CurrentBlogData.blog.Body}
        </p>
        <Heart>
          <FaHeart /> <p> {CurrentBlogData.blog.likedUser.length}</p>
        </Heart>
        <Views>
          <FaEye /> <p> {CurrentBlogData.blog.Views}</p>
        </Views>
      </Post>
      <CommenTitle>Comments</CommenTitle>
      <br />
      <textarea rows="7"></textarea>
      <h6>
        <Button
          bg={({ theme }) => theme.colors.yellow}
          clr={({ theme }) => theme.colors.primaryBlue}
        >
          Comment <FaTelegramPlane />
        </Button>
      </h6>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
      <CommentBox>
        <div></div>
        <h1>Username</h1>
        <br />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          convallis tellus et libero tincidunt interdum. Quisque maximus tempus
          eleifend. Curabitur quis odio rutrum, sodales risus nec, mollis
          turpis. Sed quis tellus porta justo lacinia ultrices. Sed bibendum a
          libero at posuere.
        </p>
      </CommentBox>
    </MainDiv>
  );
}
