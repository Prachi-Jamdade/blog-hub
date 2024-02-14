import { gql } from "@apollo/client";

export const GET_USER_DETAILS = gql`
  query Me {
    me {
      id
      username
      profilePicture
      socialMediaLinks {
        website
        github
        twitter
        instagram
        stackoverflow
        linkedin
      }
      badges {
        id
        name
        description
        image
        dateAssigned
        infoURL
        suppressed
      }
    }
  }
`;
