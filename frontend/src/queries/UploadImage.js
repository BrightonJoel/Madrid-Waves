import {gql} from "@apollo/client"

export const UPLOADIMAGE = gql`
  mutation ($file: Upload!) {
    upload(file: $file) {
      id
      name
    }
  }
`