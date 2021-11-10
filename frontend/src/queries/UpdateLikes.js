import gql from "graphql-tag"

export const UPDATELIKES = gql`
  mutation UpdateLikes($id: ID!, $UserId: ID) {
    likePost(id: $id, UserId: $UserId) {
      id
      likedUser {
        id
        username
      }
    }
  }
`
