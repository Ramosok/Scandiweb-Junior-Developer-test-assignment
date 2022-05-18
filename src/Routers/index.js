import { Navigate, Route, Routes } from "react-router";

import { ROUTE_NAMES } from "./routeNames";
import { ContainerHomePage } from "../pages/homePage/ContainerHomePage";
import { ContainerCartPage } from "../pages/cartPage/ContainerCartPage";
import { ProductDetails } from "../pages/ProductDetails";

export const Routers = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.ALL} element={<ContainerHomePage />} />
      <Route path={ROUTE_NAMES.TECH} element={<ContainerHomePage />} />
      <Route path={ROUTE_NAMES.CLOTHES} element={<ContainerHomePage />} />
      <Route path={ROUTE_NAMES.CART} element={<ContainerCartPage />} />
      <Route path={ROUTE_NAMES.PRODUCT_DETAILS} element={<ProductDetails />} />
      <Route path="*" element={<Navigate to="/all" replace />} />
    </Routes>
  );
};
