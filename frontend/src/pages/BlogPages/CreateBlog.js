import React, { useRef, useState } from "react";
import { MainDiv, CreateForm } from "./CreateBlogStyles";
import { Button } from "../../styles/GlobalComponents/Button";
import { FaPlusSquare, FaTimes } from "react-icons/fa";
import useUser from "../../hooks/useUser";
import { useHistory } from "react-router";
import {
  useMutation,
  gql,
  useQuery,
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
import { ErrorWrapper } from "../AuthPages/AuthPageStyles";

import { ApolloProvider } from "@apollo/react-hooks";
import { createUploadLink } from "apollo-upload-client";
// const cache = new InMemoryCache();

// const client = new ApolloClient({
//   cache,
//   link: createUploadLink({
//     uri: "http://localhost:1337/graphql",
//   }),
// });

const UPLOADIMAGE = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      name
    }
  }
`;

const CREATEBLOG = gql`
  mutation CreateBlog(
    $Title: String!
    $Body: String!
    $Author: ID
    $blogCategories: [ID]
  ) {
    createBlog(
      input: {
        data: {
          Title: $Title
          Body: $Body
          Author: $Author
          blogCategories: $blogCategories
        }
      }
    ) {
      blog {
        Title
      }
    }
  }
`;

const FETCHCATEGORY = gql`
  query fetchCategory {
    blogCategories {
      id
      Name
    }
  }
`;

export default function CreateBlog() {
  const title = useRef();
  const category = useRef();
  const body = useRef();
  const image = useRef();
  const history = useHistory();
  const { currentUser, loading } = useUser();

  const [
    createBlog,
    {
      data: createBlogData,
      loading: createBlogLoading,
      error: createBlogError,
    },
  ] = useMutation(CREATEBLOG, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  });

  const [uploadImage, { data: Imagedata , loading: LodingImage, error: uploadError}] = useMutation(UPLOADIMAGE);

  const [Image, setImage] = useState(null);

  function onImageChange(event) {
    console.log(event.target.files);

    setImage(event.target.files[0]);
  }

  const { data } = useQuery(FETCHCATEGORY);

  function handleSubmit(e) {
    e.preventDefault();
    // console.log(title.current.value);
    // console.log(category.current.value);
    // console.log(body.current.value);
    // console.log(image.current.value);

    createBlog({
      variables: {
        Title: title.current.value,
        Body: body.current.value,
        Author: currentUser.id,
        blogCategories: category.current.value,
      },
    });
    // uploadImage({
    //   variables: {
    //     file: Image,
    //   },
    // });

    console.log(Imagedata);
    console.log(uploadError)
    // client
    //   .mutate({
    //     mutation: UPLOAD_IMAGE,
    //     variables: {
    //       file: Image,
    //     },
    //   },
    //   )
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  if (loading) {
    return <p> loading pls wait</p>;
  } else if (currentUser) {
    return (
      <MainDiv>
        <h3>Create A New Blog</h3>
        <CreateForm>
          <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input type="text" ref={title} required></input>
            <label>Category</label>
            <select ref={category} required>
              {data.blogCategories.map((category) => (
                <option key={category.id} value={category.id}>
                  {category.Name}
                </option>
              ))}
            </select>
            <label> Body </label>
            <textarea rows="25" ref={body} required></textarea>
            <label> Upload Image</label>
            <input
              type="file"
              accept="image/*"
              ref={image}
              onChange={onImageChange}
            ></input>
            {!createBlogLoading && !createBlogError && createBlogData ? (
              <ErrorWrapper>Blog Created Successfully !!!</ErrorWrapper>
            ) : !createBlogData && !createBlogError ? (
              ""
            ) : (
              <ErrorWrapper>An error has occured !</ErrorWrapper>
            )}

            <Button
              bg={({ theme }) => theme.colors.yellow}
              clr={({ theme }) => theme.colors.primaryBlue}
              type="submit"
            >
              {createBlogLoading ? "Creating" : "Create"}
              <span>
                <FaPlusSquare />
              </span>
            </Button>
            <Button
              bg={({ theme }) => theme.colors.yellow}
              clr={({ theme }) => theme.colors.primaryBlue}
              action="clear"
            >
              Clear
              <span>
                <FaTimes />
              </span>
            </Button>
          </form>
        </CreateForm>
      </MainDiv>
    );
  } else {
    history.push("/login");
    return null;
  }
}
