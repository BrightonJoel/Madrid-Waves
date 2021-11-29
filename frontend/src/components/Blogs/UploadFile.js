import React from "react"
import { GETSINGLEBLOG } from "../../queries/GetSingleBlog"

// styles
import { FileDiv } from "../../pages/BlogPages/CreateBlogStyles"
import { FaCloudUploadAlt } from "react-icons/fa"
import { Button } from "../../styles/GlobalComponents/Button"

export default function UploadFile({
  FileStatus,
  setFileStatus,
  LoadingImage,
  Image,
  uploadImage,
  setImage,
}) {
  function onImageChange(event) {
    setImage(event.target.files[0])
    setFileStatus(event.target.files[0].name + " is chosen")
  }

  async function uploadFile(e) {
    e.preventDefault()
    if (Image) {
      await uploadImage({
        variables: {
          file: Image,
        },
        refetchQueries: [GETSINGLEBLOG],
      })
      setFileStatus("File uploaded Successfully !!!")
    } else {
      setFileStatus("First choose an image to upload")
    }
  }

  return (
    <>
      <label> Upload Image</label>
      <FileDiv>
        <div className='UploadWrapper'>
          <input type='file' onChange={onImageChange} />
          <Button
            bg={({ theme }) => theme.colors.primaryBlue}
            clr={({ theme }) => theme.colors.white}
            onClick={uploadFile}
          >
            {LoadingImage ? "Uploading" : "Upload"}
            <span>
              <FaCloudUploadAlt />
            </span>
          </Button>
        </div>
        <label>
          <h6>{FileStatus} </h6>
        </label>
      </FileDiv>
    </>
  )
}
