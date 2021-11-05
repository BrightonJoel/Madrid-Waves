import React, { useRef, useState } from "react"
import { MainDiv, CreateForm } from "./CreateBlogStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FaPlusSquare, FaTimes } from "react-icons/fa"
import useUser from "../../hooks/useUser"
import { useMutation, gql, useQuery } from "@apollo/client"
import { ErrorWrapper } from "../AuthPages/AuthPageStyles"

const UPLOADIMAGE = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      id
      name
    }
  }
`

const CREATEBLOG = gql`
  mutation CreateBlog(
    $Title: String!
    $Body: String!
    $Author: ID
    $blogCategories: [ID]
    $CoverImage: [ID]
  ) {
    createBlog(
      input: {
        data: {
          Title: $Title
          Body: $Body
          Author: $Author
          blogCategories: $blogCategories
          CoverImage: $CoverImage
        }
      }
    ) {
      blog {
        Title
        CoverImage {
          id
          name
        }
      }
    }
  }
`

const FETCHCATEGORY = gql`
  query fetchCategory {
    blogCategories {
      id
      Name
    }
  }
`

export default function CreateBlog() {
  const title = useRef()
  const category = useRef()
  const body = useRef()
  const [Image, setImage] = useState(null)
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

  const [uploadImage, { data: resultData }] = useMutation(UPLOADIMAGE, {
    async onCompleted({ data }) {
      console.log("log: completed ", await data)
    },
    ignoreResults: false,
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  function onImageChange(event) {
    console.log(event.target.files[0])
    setImage(event.target.files[0])
  }

  const { data, loading: fetchCategoriesLoading } = useQuery(FETCHCATEGORY)

  async function uploadFile(e) {
    e.preventDefault()
    console.log("Uploading.... file")
    await uploadImage({
      variables: {
        file: Image,
      },
    })
    console.log("Upload done...")
  }

  async function handleSubmit(e) {
    e.preventDefault()
    console.log("upload data", resultData)
    const imgId = await resultData.upload.id

    await createBlog({
      variables: {
        Title: title.current.value,
        Body: body.current.value,
        Author: currentUser.id,
        blogCategories: category.current.value,
        CoverImage: imgId,
      },
    })
  }

  function clearForm(e) {
    e.preventDefault()
    title.current.value = ""
    category.current.value = ""
    body.current.value = ""
  }

  if (loading) {
    return <p> loading pls wait</p>
  } else if (fetchCategoriesLoading) {
    return <p>Loading....</p>
  }

  return (
    <MainDiv>
      <h3>Create A New Blog</h3>
      <CreateForm>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type='text' ref={title} required></input>
          <label>Category</label>
          <select ref={category} required>
            {data.blogCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.Name}
              </option>
            ))}
          </select>
          <label> Body </label>
          <textarea rows='25' ref={body} required></textarea>
          <label> Upload Image</label>{" "}
          <input type='file' accept='image/*' onChange={onImageChange}></input>
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
            onClick={uploadFile}
          >
            Upload
          </Button>
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
  )
}
