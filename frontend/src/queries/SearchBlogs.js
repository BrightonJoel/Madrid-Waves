import gql from "graphql-tag"

export const SEARCHBLOGS = gql`
  query SearchBlogs($where: JSON) {
    blogs(where: $where) {
      id
      Title
      Body
      CoverImage {
        id
        url
      }
      Views
    }
  }
`
