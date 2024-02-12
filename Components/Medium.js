import React from "react";
import { View } from "react-native";
import { getMediumUserDetails } from "../API/medium-api/get_user_details";

const Medium = () => {
  getMediumUserDetails()
    .then((res) => {
      console.log("Success: ", res.data);
    })
    .catch((err) => {
      console.log("Error: ", err);
    });

  return <View></View>;
};

export default Medium;
