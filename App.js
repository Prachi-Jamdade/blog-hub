import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Medium from "./Components/Medium";
import DevTo from "./Components/DevTo";
import Hashnode from "./Components/Hashnode";
import { HASHNODE_TOKEN } from "react-native-dotenv";
import { NavigationContainer } from "@react-navigation/native";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";
import PostBlogPost from "./screens/PostBlogScreen";
import { useFonts } from "expo-font";
import { useCallback } from "react";

const client = new ApolloClient({
  uri: "https://gql.hashnode.com",
  cache: new InMemoryCache(),
});

const httpLink = new HttpLink({ uri: "https://gql.hashnode.com" });

const authMiddleware = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: HASHNODE_TOKEN ? `Bearer ${HASHNODE_TOKEN}` : "",
    },
  });
  return forward(operation);
});

export const apolloClient = new ApolloClient({
  link: concat(authMiddleware, httpLink),
  cache: new InMemoryCache(),
});

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    Fonts: require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <NavigationContainer onLayout={onLayoutRootView}>
      <ApolloProvider client={apolloClient}>
        <View style={styles.container}>
          <StatusBar style="auto" />
          <PostBlogPost />
        </View>
      </ApolloProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
});
