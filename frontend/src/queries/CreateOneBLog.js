import { gql } from "@apollo/client"

export const CREATEBLOG = gql`
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
        id
        Title
        CoverImage {
          id
          name
        }
      }
    }
  }
`
