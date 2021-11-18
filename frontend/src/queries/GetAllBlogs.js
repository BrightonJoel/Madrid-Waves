import gql from "graphql-tag"

export const GETBLOGS = gql`
  query GetBlogs($where: JSON, $start: Int) {
    blogs(sort: "created_at:desc", where: $where, limit: 5, start: $start) {
      id
      Title
      Body
      CoverImage {
        id
        url
      }
      likedUser {
        id
        username
      }
      blogCategories {
        id
        Name
      }
      Views
    }
  }
`
