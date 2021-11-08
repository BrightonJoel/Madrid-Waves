import gql from "graphql-tag"

export const GETSINGLEBLOG = gql`
  query GetSingleBlog {
    blogs(sort: "created_at:desc", limit: 1) {
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
