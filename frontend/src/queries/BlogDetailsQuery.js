import gql from "graphql-tag"

export const GETSINGLEBLOGWITHID = gql`
  query GetSingleBlog($id: ID!) {
    blog(id: $id) {
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
      Author {
        username
        id
      }
      created_at
    }
  }
`

export const UPDATEVIEWS = gql`
  mutation updatedView($id: ID!, $Views: Int) {
    updateBlog(input: { where: { id: $id }, data: { Views: $Views } }) {
      blog {
        Views
      }
    }
  }
`

export const CREATECOMMENT = gql`
  mutation CreateComment($commentText: String!, $blog: ID, $commentedUser: ID) {
    createComment(
      input: {
        data: {
          commentText: $commentText
          blog: $blog
          commentedUser: $commentedUser
        }
      }
    ) {
      comment {
        id
      }
    }
  }
`

export const GETCOMMENTS = gql`
  query GetComments($id: ID!) {
    comments(where: { blog: { id: $id } }) {
      id
      commentText
      commentedUser {
        username
      }
    }
  }
`
