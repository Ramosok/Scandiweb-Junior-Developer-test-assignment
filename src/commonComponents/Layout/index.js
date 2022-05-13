import { ContainerHeader } from "../Header/ContainerHeader";

export const Layout = ({ children }) => {
  return (
    <>
      <ContainerHeader />
      <main>{children}</main>
    </>
  );
};
