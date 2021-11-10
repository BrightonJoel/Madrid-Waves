import React, { useState } from "react"
import { DELETEBLOG } from "../../queries/DeleteBlog"
import { useMutation } from "@apollo/client"
import { GETUSERBLOGS } from "../../queries/GetUserBlogs"

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

export default function DeleteButton({ blogId }) {
  const [isOpen, setIsOpen] = useState(false)

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
    await deleteBlog({
      variables: { Id: blogId },
      refetchQueries: [GETUSERBLOGS],
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
                {loading ? "Loading..." : "Yes"}
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
