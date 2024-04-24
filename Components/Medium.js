import { getMediumUserDetails } from "../API/medium-api/get_user_details";
import { save, getValueFor } from "../Utils/handleValues";
import { strings } from "../Utils/Strings";
import { getUsersPublications } from "../API/medium-api/get_users_publications";
import { createMediumPost } from "../API/medium-api/create_medium_article";

const { userID } = strings.medium;

function getMediumUser() {
  getMediumUserDetails()
    .then((res) => {
      console.log("Success: ", res.data);
      save(userID, res.data.id);
      return res.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

function getMediumUserPublications() {
  getUsersPublications()
    .then((res) => {
      console.log("Publications: ", res.data);
      return res.data;
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

async function createMediumBlogPost(title, content, tags) {
  try {
    const res = await createMediumPost(
      title,
      "html",
      content,
      null,
      tags,
      "draft",
      false
    );
    console.log("Res", res);
    return res;
  } catch (error) {
    console.error("Error posting blog:", error);
  }
}

export { getMediumUser, getMediumUserPublications, createMediumBlogPost };
