import { Route, Routes } from "react-router";
import { ROUTE_NAMES } from "./routeNames";
import { ContainerHomePage } from "../pages/HomePage/ContainerHomePage";

export const Routers = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.HOME} element={<ContainerHomePage />} />
    </Routes>
  );
};
