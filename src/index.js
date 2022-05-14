import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL";

import { Layout } from "./commonComponents/Layout";
import { Routers } from "./Routers";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Routers />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);
