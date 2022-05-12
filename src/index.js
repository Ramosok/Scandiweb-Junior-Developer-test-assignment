import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { ApolloProvider, gql } from "@apollo/client";
import { client } from "./graphQL";
import "./index.css";

client
  .query({
    query: gql`
      query {
        categories {
          name
          products {
            name
            prices {
              amount
              currency {
                label
                symbol
              }
            }
          }
        }
      }
    `,
  })
  .then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </React.StrictMode>
);
