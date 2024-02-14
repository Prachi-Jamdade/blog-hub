import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Medium from "./Components/Medium";
import DevTo from "./Components/DevTo";
import Hashnode from "./Components/Hashnode";
import { HASHNODE_TOKEN } from "react-native-dotenv";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  ApolloLink,
  InMemoryCache,
  concat,
} from "@apollo/client";

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
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        {/* <DevTo /> */}
        {/* <Medium /> */}
        <Hashnode />
      </View>
    </ApolloProvider>
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
