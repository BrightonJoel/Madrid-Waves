import gql from "graphql-tag"

export const DELETEFILE = gql`
  mutation DeleteFile($Id: ID!) {
    deleteFile(input: { where: { id: $Id } }) {
      file {
        id
      }
    }
  }
`

export const DELETEBLOG = gql`
  mutation DeleteBlog($Id: ID!) {
    deleteBlog(input: { where: { id: $Id } }) {
      blog {
        id
        Title
      }
    }
  }
`
