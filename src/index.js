import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL";

import { Layout } from "./commonComponents/Layout";
import { Routers } from "./Routers";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HashRouter>
        <Layout>
          <Routers />
        </Layout>
      </HashRouter>
    </ApolloProvider>
  </React.StrictMode>
);
