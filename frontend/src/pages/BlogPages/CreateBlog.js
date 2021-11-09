import useUser from "../../hooks/useUser";
import React, { useRef, useState } from "react";
import { UPLOADIMAGE } from "../../queries/UploadImage";
import { CREATEBLOG } from "../../queries/CreateOneBLog";
import { MainDiv, CreateForm, FileDiv } from "./CreateBlogStyles";
import { ErrorWrapper } from "../AuthPages/AuthPageStyles";
import { useMutation, useQuery } from "@apollo/client";
import { Button } from "../../styles/GlobalComponents/Button";
import { FETCHCATEGORY } from "../../queries/fetchBlogCategory";
import { FaPlusSquare, FaTimes, FaCloudUploadAlt } from "react-icons/fa";
import { Redirect } from "react-router"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner";



export default function CreateBlog() {
  //constants and variables
  const title = useRef();
  const category = useRef();
  const body = useRef();
  const [Image, setImage] = useState(null);
  const [FileStatus, setFileStatus] = useState("Click here to upload an image")
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
  const [
    uploadImage,
    { data: ImageData, loading: LoadingImage, error: ImageFetchError },
  ] = useMutation(UPLOADIMAGE, {
    ignoreResults: false,
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  });
  const { data, loading: fetchCategoriesLoading } = useQuery(FETCHCATEGORY);

  //events and functions
 

  function onImageChange(event) {
    setImage(event.target.files[0]);
    setFileStatus(event.target.files[0].name + " is chosen")
  }

  async function uploadFile(e) {
    e.preventDefault();
    if(Image){
    await uploadImage({
      variables: {
        file: Image,
      },
    });
    setFileStatus("File uploaded Successfully !!!")
  }else{
    setFileStatus("First choose an image to upload")
  }

  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("upload data", ImageData);
    if(ImageData || ImageFetchError){
    const imgId = await ImageData.upload.id;
    
    await createBlog({
      variables: {
        Title: title.current.value,
        Body: body.current.value,
        Author: currentUser.id,
        blogCategories: category.current.value,
        CoverImage: imgId,
      },
    });
  }else{
    setFileStatus("First upload an image to create blog")
  }

  }

  function clearForm(e) {
    e.preventDefault();
    window.location.reload(false);
  }

// Rendering the page
  if (loading || fetchCategoriesLoading) {
    return <SpinnerContainer>
    <img src='/img/Logo-Spinner.svg' alt='loader' />
  </SpinnerContainer>
  }
  
  return (
    <>
    {currentUser ? (
      <MainDiv>
      <h3>Create A New Blog</h3>
      <CreateForm>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text" minLength="10" maxLength="50" ref={title} required></input>
          <label>Category</label>
          <select ref={category} required>
            {data.blogCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.Name}
              </option>
            ))}
          </select>
          <label> Body </label>
          <textarea rows="25" minLength ="100" maxLength="1000" ref={body} required></textarea>
          <label> Upload Image</label>
          <FileDiv>
          <input type="file" onChange={onImageChange} id="upload" />
          <label htmlFor="upload"><h1>{ FileStatus} </h1><Button
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.neutral}
            onClick={uploadFile}
          >
            {LoadingImage ? "Uploading" : "Upload"}
            <span>
              <FaCloudUploadAlt />
            </span>
            </Button>
            </label>
          
          
          </FileDiv>
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
            onClick={clearForm}
          >
            Clear
            <span>
              <FaTimes />
            </span>
          </Button>
        </form>
      </CreateForm>
    </MainDiv>
    ) : (
      <Redirect to='/login' />
    )}
    </>
  );
}
