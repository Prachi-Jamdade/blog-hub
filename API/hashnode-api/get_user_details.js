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
const username = "CodessPrachi";
export const GET_USER_BY_ID = gql`
  query User($username: String!) {
    user(username: $username) {
      id
      username
      name
      bio {
        markdown
        html
        text
      }
      bioV2 {
        markdown
        html
        text
      }
      profilePicture
      socialMediaLinks {
        website
        github
        twitter
        instagram
        facebook
        stackoverflow
        linkedin
        youtube
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
