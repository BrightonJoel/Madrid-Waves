import useUser from "../../hooks/useUser"
import React, { useRef, useState } from "react"
import { Redirect, useHistory } from "react-router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCHCATEGORY } from "../../queries/fetchBlogCategory"
import { UPLOADIMAGE } from "../../queries/UploadImage"
import { CREATEBLOG } from "../../queries/CreateOneBLog"
import { GETBLOGS } from "../../queries/GetAllBlogs"
import UploadFile from "../../components/Blogs/UploadFile"

// Markdown
import MarkdownIt from "markdown-it"
import MdEditor from "react-markdown-editor-lite"
import "react-markdown-editor-lite/lib/index.css"

// Styles
import { Article, CreateForm, Background } from "./CreateBlogStyles"
import { ErrorWrapper } from "../AuthPages/AuthPageStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FaPlusSquare, FaTimes } from "react-icons/fa"
import { SpinnerContainer } from "../../styles/GlobalComponents/Spinner"

export default function CreateBlog() {
  //constants and variables
  const history = useHistory()
  const title = useRef()
  const category = useRef()
  const [content, setContent] = useState("")
  const [Image, setImage] = useState(null)
  const [FileStatus, setFileStatus] = useState("")
  const { currentUser, loading } = useUser()

  const mdParser = new MarkdownIt()

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

  function handleEditorChange({ html, text }) {
    // console.log("handleEditorChange", html, text)
    setContent(text)
    console.log(text)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (ImageData || ImageFetchError) {
      const imgId = await ImageData.upload.id

      await createBlog({
        variables: {
          Title: title.current.value,
          Body: content,
          Author: currentUser.id,
          blogCategories: category.current.value,
          CoverImage: imgId,
        },
        refetchQueries: [GETBLOGS],
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
          <Article>
            <h3>Create A New Blog</h3>
            <CreateForm>
              <form onSubmit={handleSubmit}>
                <label htmlFor='title'>Title</label>
                <input
                  id='title'
                  type='text'
                  minLength='5'
                  maxLength='100'
                  ref={title}
                  required
                ></input>
                <label htmlFor='category'>Category</label>
                <select id='category' ref={category} required>
                  {data.blogCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.Name}
                    </option>
                  ))}
                </select>

                <MdEditor
                  style={{
                    height: "500px",
                    padding: "0 0 15px 0",
                    margin: "10px 0",
                  }}
                  renderHTML={(text) => mdParser.render(text)}
                  onChange={handleEditorChange}
                />
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
                  clr={({ theme }) => theme.colors.text}
                  type='submit'
                >
                  {createBlogLoading ? "Creating" : "Create"}
                  <span>
                    <FaPlusSquare />
                  </span>
                </Button>
                <Button
                  bg={({ theme }) => theme.colors.yellow}
                  clr={({ theme }) => theme.colors.text}
                  onClick={clearForm}
                >
                  Clear
                  <span>
                    <FaTimes />
                  </span>
                </Button>
              </form>
            </CreateForm>
          </Article>
        </Background>
      ) : (
        <Redirect to='/login' />
      )}
    </>
  )
}
