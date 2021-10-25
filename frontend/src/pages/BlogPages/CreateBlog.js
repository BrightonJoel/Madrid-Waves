import React from "react"
import { MainDiv, CreateForm } from "./CreateBlogStyles"
import { Button } from "../../styles/GlobalComponents/Button"
import { FaPlusSquare, FaTimes } from "react-icons/fa"

export default function CreateBlog() {
  return (
    <MainDiv>
      <h3>Create A New Blog</h3>
      <CreateForm>
        <form>
          <label>Title</label>
          <input type='text'></input>
          <label>Category</label>
          <select>
            <option value='volvo'>Volvo</option>
            <option value='saab'>Saab</option>
            <option value='mercedes'>Mercedes</option>
            <option value='audi'>Audi</option>
          </select>
          <label> Body </label>
          <textarea rows='25'></textarea>
          <label> Upload Image</label>
          <input type='file' accept='image/*'></input>
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
          >
            Create{" "}
            <span>
              {" "}
              <FaPlusSquare />{" "}
            </span>
          </Button>
          <Button
            bg={({ theme }) => theme.colors.yellow}
            clr={({ theme }) => theme.colors.primaryBlue}
            action='clear'
          >
            Clear{" "}
            <span>
              {" "}
              <FaTimes />
            </span>
          </Button>
        </form>
      </CreateForm>
    </MainDiv>
  )
}
