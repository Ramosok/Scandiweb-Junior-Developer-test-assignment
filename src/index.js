import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphQL";

import { Routers } from "./Routers";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";

import { Layout } from "./commonComponents/Layout";

import "./index.css";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Layout>
              <Routers />
            </Layout>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);
