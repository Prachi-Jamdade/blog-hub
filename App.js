import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MEDIUM_TOKEN } from "react-native-dotenv";
import Medium from "./Components/Medium";
import { getValueFor } from "./Utils/handleValues";
import DevTo from "./Components/DevTo";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <DevTo />
      {/* <Medium /> */}
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
