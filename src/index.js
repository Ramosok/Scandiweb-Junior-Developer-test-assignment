import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL";

import { Routers } from "./Routers";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Layout } from "./commonComponents/Layout";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <Layout>
            <Routers />
          </Layout>
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
