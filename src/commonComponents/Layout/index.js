import { ContainerHeader } from "../Header/ContainerHeader";
import { Wrapper } from "./LayoutStyledComponent";

export const Layout = ({ children }) => {
  return (
    <Wrapper>
      <ContainerHeader />
      <main>{children}</main>
    </Wrapper>
  );
};
