import useUser from "../../hooks/useUser"
import React, { useRef, useState } from "react"
import { Redirect, useHistory } from "react-router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCHCATEGORY } from "../../queries/fetchBlogCategory"
import { UPLOADIMAGE } from "../../queries/UploadImage"
import { CREATEBLOG } from "../../queries/CreateOneBLog"
import UploadFile from "../../components/Blogs/UploadFile"

// Styles
import { MainDiv, CreateForm, Background } from "./CreateBlogStyles"
import { ErrorWrapper } from "../AuthPages/AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FaPlusSquare, FaTimes } from "react-icons/fa"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"

export default function CreateBlog() {
  //constants and variables
  const history = useHistory()
  const title = useRef()
  const category = useRef()
  const body = useRef()
  const [Image, setImage] = useState(null)
  const [FileStatus, setFileStatus] = useState("")
  const { currentUser, loading } = useUser()
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
  })
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
  })
  const { data, loading: fetchCategoriesLoading } = useQuery(FETCHCATEGORY)

  async function handleSubmit(e) {
    e.preventDefault()
    if (ImageData || ImageFetchError) {
      const imgId = await ImageData.upload.id

      await createBlog({
        variables: {
          Title: title.current.value,
          Body: body.current.value,
          Author: currentUser.id,
          blogCategories: category.current.value,
          CoverImage: imgId,
        },
      })

      return history.push("/myblogs")
    } else {
      setFileStatus("First upload an image to create blog")
    }
  }

  function clearForm(e) {
    e.preventDefault()
    window.location.reload(false)
  }

  // Rendering the page
  if (loading || fetchCategoriesLoading) {
    return (
      <SpinnerContainer>
        <img src='/img/Logo-Spinner.svg' alt='loader' />
      </SpinnerContainer>
    )
  }

  return (
    <>
      {currentUser ? (
        <Background>
          <MainDiv>
            <h3>Create A New Blog</h3>
            <CreateForm>
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input
                  type='text'
                  minLength='5'
                  maxLength='100'
                  ref={title}
                  required
                ></input>
                <label>Category</label>
                <select ref={category} required>
                  {data.blogCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.Name}
                    </option>
                  ))}
                </select>
                <label> Body </label>
                <textarea
                  rows='25'
                  minLength='100'
                  ref={body}
                  required
                ></textarea>
                <UploadFile
                  FileStatus={FileStatus}
                  setFileStatus={setFileStatus}
                  LoadingImage={LoadingImage}
                  Image={Image}
                  uploadImage={uploadImage}
                  setImage={setImage}
                />
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
                  type='submit'
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
        </Background>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  )
}
