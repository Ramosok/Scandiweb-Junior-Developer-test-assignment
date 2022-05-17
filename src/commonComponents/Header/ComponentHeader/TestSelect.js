import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from "./styledCompSel";
import { useEffect, useState } from "react";

import { handleChangeCurrencies } from "../actions";
import { useDispatch } from "react-redux";

export const TestSelect = ({
  select,
  currencies,
  getLocalStorage,
  selectValue,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(
    getLocalStorage || "USD"
  );
  const dispatch = useDispatch();

  const toggling = () => setIsOpen(!isOpen);

  const symbolList = {
    USD: "$",
    GBP: "£",
    AUD: "A$",
    JPY: "¥",
    RUB: "₽",
  };

  const dataConverter = (itemsList, key, inner, value) => {
    // if (!inner) {
    //   return itemsList?.reduce((acc, n) => ((acc[n[key]] = n[value]), acc), {});
    // }
    return itemsList?.reduce(
      (acc, n) => ((acc[n[key][!inner ? null : inner]] = n[value]), acc),
      {}
    );
  };

  console.log(dataConverter(currencies?.currencies, "label", "", "symbol"));

  const onOptionClicked = (label) => () => {
    setSelectedOption(label);
    setIsOpen(false);
  };
  useEffect(() => {
    dispatch(handleChangeCurrencies(selectedOption));
    localStorage.setItem("currencies", JSON.stringify(selectedOption));
  }, [selectedOption, dispatch]);
  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {symbolList[selectedOption]}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {currencies.currencies?.map(({ label, symbol }) => (
              <ListItem onClick={onOptionClicked(label)} key={symbol}>
                {symbol} {label}
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};
