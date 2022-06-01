import gql from "@apollo/client";

export const QUERY_USER = gql`
  {
    user {
      _id
      username
      email
      savedBooks {
        title
        bookId
        authors
        description
        image
        link
      }
    }
  }
`;