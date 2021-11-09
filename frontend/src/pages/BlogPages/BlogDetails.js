import React, {useRef} from "react";
import {
  MainDiv,
  Post,
  Views,
  CommenTitle,
  ActionContainer,
  Share,
} from "./BlogDetailsStyles";
import {
  FaShare,
  FaEye,
  FaTelegramPlane,
} from "react-icons/fa";
import { Button } from "../../styles/GlobalComponents/Button";
import { useParams } from "react-router-dom";
import { gql, useMutation, useQuery } from "@apollo/client";
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner";
import LikeButton from "../../components/Blogs/LikeButton";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Comment from "../../components/Blogs/comment";
import useUser from "../../hooks/useUser";

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
        id
      }
      created_at
    }
  }
`;

const UPDATEVIEWS = gql`
  mutation updatedView($id: ID!, $Views: Int) {
    updateBlog(input: { where: { id: $id }, data: { Views: $Views } }) {
      blog {
        Views
      }
    }
  }
`;

const CREATECOMMENT = gql`
mutation CreateComment($commentText: String!, $blog: ID, $commentedUser: ID ){
  createComment(
    input:{
      data:{
        commentText: $commentText,
				blog: $blog,
				commentedUser: $commentedUser
      }
    }
  ){
    comment{
      id
    }
  }
}
`
const GETCOMMENTS = gql`
query GetComments($id: ID!){
  comments(where:{blog:{id:$id}}){
    id,
    commentText,
    commentedUser{
      username
    }
  }
}
`
export default function BlogsDetails() {
  //Reloading the page once every time it loads
  function reloadPage() {
    var currentDocumentTimestamp = new Date(performance.timing.domLoading).getTime();
    // Current Time //
    var now = Date.now();
    // Total Process Lenght as Minutes //
    var tenSec = 10 * 1000;
    // End Time of Process //
    var plusTenSec = currentDocumentTimestamp + tenSec;
    if (now > plusTenSec) {
        window.location.reload()
    }
}
reloadPage();
  const { id } = useParams();
  const { currentUser, currentUserDataLoading} = useUser();
  const {
    data: CurrentBlogData,
    loading: LoadingCurrentBlog,
    error: BlogLoadingError,
  } = useQuery(GETSINGLEBLOGWITHID, {
    variables: { id: id },
  });
  const{
    data: AllComments,
    loading: loadingComments,
    error: commentLoadingError
  } = useQuery(GETCOMMENTS, {
    variables:{id:id},
  })
  let toggler = 0;
 const commentText = useRef();
  const [UpdateViews] = useMutation(UPDATEVIEWS, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  });

  const [CreateComment] = useMutation(CREATECOMMENT,{
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  if (LoadingCurrentBlog || loadingComments || currentUserDataLoading) {
    return (
      <SpinnerContainer>
        <img src="/img/Logo-Spinner.svg" alt="loader" />
      </SpinnerContainer>
    );
  } else {
    if (BlogLoadingError || commentLoadingError ) return <p>{BlogLoadingError.message}</p>;
    console.log(CurrentBlogData.blog.CoverImage[0]);
    function handleScroll(event) {
      if (toggler === 0) {
        UpdateViews({
          variables: {
            id: id,
            Views: CurrentBlogData.blog.Views + 1,
          },
        });
        toggler++;
        //console.log(CurrentBlogData.blog.Views);
      }
    
    }
    
    function handleComment(event){
      CreateComment({
        variables: {
          commentText: commentText.current.value, 
          blog: CurrentBlogData.blog.id, 
          commentedUser: currentUser.id
        },
      });
      window.location.reload()
    }
    console.log( AllComments)
    return (
      <MainDiv onLoad={handleScroll}>
        <h1>{CurrentBlogData.blog.Title}</h1>
        <br />
        <p>
          Author: {CurrentBlogData.blog.Author.username} | created at:{" "}
          {new Date(CurrentBlogData.blog.created_at) + " "}
        </p>
        <br />

        <Post>
          <img
            key={CurrentBlogData.blog.CoverImage[0].id}
            src={`http://localhost:1337${CurrentBlogData.blog.CoverImage[0].url}`}
            alt="Thumbnail"
          />
            <ReactMarkdown
              children={CurrentBlogData.blog.Body}
              remarkPlugins={[remarkGfm]}
            />
          
          <ActionContainer>
            <LikeButton id={id} likedUser={CurrentBlogData.blog.likedUser} />

            <Views >
              <FaEye /> <p>{CurrentBlogData.blog.Views}</p>
            </Views>
            <Share>
              <FaShare />
            </Share>
          </ActionContainer>
        </Post>
        <CommenTitle>Comments</CommenTitle>
        <br />
        <textarea rows="7" ref={commentText}></textarea>
        <h6>
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
            onClick= {handleComment}
          >
            Comment <FaTelegramPlane />
          </Button>
        </h6>
        {AllComments.comments.map((comment)=>(
          <Comment key={comment.id}
          username= {comment.commentedUser.username}
          commentPassage={comment.commentText}
        />
        ))}
        
      </MainDiv>
    );
  }
}
