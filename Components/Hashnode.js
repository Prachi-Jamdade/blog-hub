import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";
import {
  GET_USER_BY_ID,
  GET_USER_DETAILS,
} from "./../API/hashnode-api/get_user_details";

const Hashnode = () => {
  // const { loading, error, data } = useQuery(GET_USER_DETAILS);
  // if (loading) return <Text style={{ color: "white" }}>Loading...</Text>;
  // if (error)
  //   return <Text style={{ color: "white" }}>Error! {error.message}</Text>;

  const { loading, error, data } = useQuery(GET_USER_BY_ID);
  if (loading) return <Text style={{ color: "white" }}>Loading...</Text>;
  if (error)
    return <Text style={{ color: "white" }}>Error! {error.message}</Text>;

  console.log(data);
  return (
    <View>
      <Text style={{ color: "white" }}>Helloo</Text>
    </View>
  );
};

export default Hashnode;
