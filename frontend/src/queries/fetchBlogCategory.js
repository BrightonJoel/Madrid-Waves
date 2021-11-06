import {gql} from "@apollo/client"

export const FETCHCATEGORY = gql`
  query fetchCategory {
    blogCategories {
      id
      Name
    }
  }
`