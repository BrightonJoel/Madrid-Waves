import React, { useState } from "react"
import { useMutation } from "@apollo/client"
import { DELETEFILE, DELETEBLOG } from "../../../queries/DeleteBlog"
import { GETBLOGS } from "../../../queries/GetAllBlogs"

// Styles
import {
  DeleteWrapper,
  DeletePopup,
  PopupContent,
  NoButton,
  ConfirmButton,
  ButtonContainer,
} from "./UserBlogsStyles"
import { AiOutlineDelete, AiOutlineWarning } from "react-icons/ai"

export default function DeleteButton({ blogId, imageId }) {
  const [isOpen, setIsOpen] = useState(false)

  const [deleteFile, { loading: loadingDelete }] = useMutation(DELETEFILE, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  const [deleteBlog, { loading }] = useMutation(DELETEBLOG, {
    options: {
      context: {
        headers: {
          credentials: "include",
        },
      },
    },
  })

  async function handleDelete(blogId) {
    await deleteFile({
      variables: { Id: imageId },
    })

    await deleteBlog({
      variables: { Id: blogId },
      refetchQueries: [GETBLOGS],
    })

    setIsOpen(!isOpen)
  }
  return (
    <>
      {isOpen && (
        <DeletePopup>
          <PopupContent>
            <h3>Please Confirm</h3>
            <AiOutlineWarning className='warning' />
            <p>Are you sure you want to delete ?</p>
            <hr />
            <ButtonContainer>
              <NoButton onClick={() => setIsOpen(false)}>No</NoButton>
              <ConfirmButton onClick={() => handleDelete(blogId)}>
                {loadingDelete
                  ? "Deleting File..."
                  : loading
                  ? "Loading..."
                  : "Yes"}
              </ConfirmButton>
            </ButtonContainer>
          </PopupContent>
        </DeletePopup>
      )}
      <DeleteWrapper>
        <AiOutlineDelete className='delete' onClick={() => setIsOpen(true)} />
      </DeleteWrapper>
    </>
  )
}
