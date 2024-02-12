import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MEDIUM_TOKEN } from "react-native-dotenv";
import Medium from "./Components/Medium";
import { getValueFor } from "./Utils/handleValues";

export default function App() {
  const token = MEDIUM_TOKEN;
  console.log("TOKEN", token);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Medium />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
