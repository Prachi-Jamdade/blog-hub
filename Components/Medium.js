import React from "react";
import { View } from "react-native";
import { getMediumUserDetails } from "../API/medium-api/get_user_details";
import { save, getValueFor } from "../Utils/handleValues";
import { strings } from "../Utils/Strings";
import { getUsersPublications } from "../API/medium-api/get_users_publications";

const Medium = () => {
  const { userID } = strings.medium;

  getMediumUserDetails()
    .then((res) => {
      console.log("Success: ", res.data);
      save(userID, res.data.id);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  getUsersPublications()
    .then((res) => {
      console.log("Publications: ", res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return <View></View>;
};

export default Medium;
