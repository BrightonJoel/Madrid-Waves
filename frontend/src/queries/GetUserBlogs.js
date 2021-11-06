import gql from "graphql-tag"

export const GETUSERBLOGS = gql`
  query GetBlogs($where: JSON) {
    blogs(sort: "created_at:desc", where: $where) {
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
