import gql from "graphql-tag"

export const UPDATELIKES = gql`
  mutation UpdateLikes($id: ID!, $UserId: ID) {
    likePost(id: $id, UserId: $UserId) {
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
      Views
    }
  }
`
