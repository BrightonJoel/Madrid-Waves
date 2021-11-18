import gql from "graphql-tag"

export const FORGOTPASSWORD = gql`
mutation forgotPassword($email :String!){
    forgotPassword(
          email: $email){
      ok
    }
  }
`

export const RESETPASSWORD = gql `
mutation restPassword($password : String!, $passwordConfirmation: String!, $code : String!){
    resetPassword(
      password: $password 
      passwordConfirmation: $passwordConfirmation
      code:$code
    ){
      jwt
      user{
        id,
        username
      }
    }
  }

`