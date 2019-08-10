import { gql } from "apollo-boost";

export const USER = gql`
  query user {
    user {
      id
      email
      posts {
        id
        title
        body
      }
    }
  }
`;
