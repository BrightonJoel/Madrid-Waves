import gql from "graphql-tag"

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
