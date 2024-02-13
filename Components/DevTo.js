import React from "react";
import { getDevToUserDetails } from "../API/devto-api/get_user_details";
import { View } from "react-native";
import { save } from "../Utils/handleValues";
import { strings } from "../Utils/Strings";
import { updateArticle } from "../API/devto-api/update_article";

const DevTo = () => {
  const { userID } = strings.devto;
  //   getDevToUserDetails()
  //     .then((res) => {
  //       console.log("Success: ", res);
  //       save(userID, Number(res.id).toString());
  //     })
  //     .catch((err) => {
  //       console.log("Error: ", err);
  //     });

  updateArticle().then(() => {});
  return <View></View>;
};

export default DevTo;
