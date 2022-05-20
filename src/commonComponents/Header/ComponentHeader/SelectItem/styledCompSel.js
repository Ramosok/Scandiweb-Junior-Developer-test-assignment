import styled from "styled-components";
import arrow from "./../../../../static/img/arrow_select.png";

export const DropDownContainer = styled.div`
  z-index: 1000;
  width: 60px;
  margin-left: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const DropDownHeader = styled.div`
  display: flex;
  font-weight: 500;
  font-size: 1.125rem;
  background: #ffffff;
  margin: 15%;
`;

export const DropDownList = styled.ul`
  width: 100px;
  padding: 0;
  background: #ffffff;
  box-sizing: border-box;
  font-size: 1.125rem;
  font-weight: 500;
  position: absolute;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: 5%;
  background-color: #ffffff;
  &:hover {
    background-color: #eeeeee;
    cursor: pointer;
  }
`;
export const Arrow = styled.div`
  align-self: flex-end;
  min-width: 8px;
  height: 4px;
  margin-left: 10px;
  margin-bottom: 5px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${arrow});
  transform: ${({ isOpen }) =>
    isOpen === false ? "rotate(0)" : "rotate(180deg)"};
`;
