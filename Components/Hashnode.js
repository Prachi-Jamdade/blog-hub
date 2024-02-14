import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_USER_DETAILS } from "./../API/hashnode-api/get_user_details";
import { HASHNODE_TOKEN } from "react-native-dotenv";

const Hashnode = () => {
  const authToken = HASHNODE_TOKEN;
  const { loading, error, data } = useQuery(GET_USER_DETAILS);
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
