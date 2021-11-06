import gql from "graphql-tag"

export const GETBLOGS = gql`
  query GetBlogs {
    blogs(sort: "created_at:desc") {
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
