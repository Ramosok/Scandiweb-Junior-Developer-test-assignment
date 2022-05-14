import { Route, Routes } from "react-router";
import { ROUTE_NAMES } from "./routeNames";
import { ContainerHomePage } from "../pages/HomePage/ContainerHomePage";
import { ContainerTechPage } from "../pages/TechPage/ContainerTechPage";
import { ContainerClothesPage } from "../pages/ClothesPage/ContainerClothesPage";

export const Routers = () => {
  return (
    <Routes>
      <Route path={ROUTE_NAMES.ALL} element={<ContainerHomePage />} />
      <Route path={ROUTE_NAMES.TECH} element={<ContainerTechPage />} />
      <Route path={ROUTE_NAMES.CLOTHES} element={<ContainerClothesPage />} />
    </Routes>
  );
};
