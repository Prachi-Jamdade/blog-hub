import React from "react";
import { getDevToUserDetails } from "../API/devto-api/get_user_details";
import { createDevToPost } from "../API/devto-api/create_devto_article";
import { View } from "react-native";
import { save } from "../Utils/handleValues";
import { strings } from "../Utils/Strings";
const { userID } = strings.devto;

function getDevToUser() {
  getDevToUserDetails()
    .then((res) => {
      console.log("Success: ", res);
      save(userID, Number(res.id).toString());
    })
    .catch((err) => {
      console.log("Error: ", err);
    });
}

async function createDevToBlogPost(title, tags, content) {
  try {
    const res = await createDevToPost(
      title,
      false,
      content,
      tags,
      "Hello Series",
      null,
      null,
      null
    );
    console.log("Dev To Result: ", res);
    return res;
  } catch (error) {
    console.error("Error posting blog:", error);
  }
}

export { getDevToUser, createDevToBlogPost };
