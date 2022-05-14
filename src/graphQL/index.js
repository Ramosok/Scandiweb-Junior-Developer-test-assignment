import { ApolloClient, InMemoryCache } from "@apollo/client";
const BASE_URL = "http://localhost:4001/graphql";

export const client = new ApolloClient({
  uri: BASE_URL,
  cache: new InMemoryCache(),
});
