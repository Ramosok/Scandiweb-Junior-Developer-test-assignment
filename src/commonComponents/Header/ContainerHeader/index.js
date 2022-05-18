import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useFetchGraphQl } from "../../../hooks";

import { GET_CATEGORIES, GET_CURRENCIES } from "../../../graphQL/query";

import { ComponentHeader } from "../ComponentHeader";

import { handleChangeCurrencies } from "../actions";

import { dataConverter } from "../../../utils/dataConverter";

export const ContainerHeader = memo(() => {
  const getLocalStorage = JSON.parse(localStorage.getItem("currencies"));

  const [categories] = useFetchGraphQl(GET_CATEGORIES, {});
  const [currencies] = useFetchGraphQl(GET_CURRENCIES, {});
  const [selectedOption, setSelectedOption] = useState(
    getLocalStorage || "USD"
  );
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const onOptionClicked = (label) => () => {
    setSelectedOption(label);
    setIsOpen(false);
  };
  const toggling = () => setIsOpen(!isOpen);

  useEffect(() => {
    dispatch(handleChangeCurrencies(selectedOption));
    localStorage.setItem("currencies", JSON.stringify(selectedOption));
  }, [selectedOption, dispatch]);

  const getSymbol = dataConverter(currencies?.currencies, "label", "symbol");

  return (
    <ComponentHeader
      categories={categories}
      currencies={currencies}
      selectedOption={selectedOption}
      getSymbol={getSymbol}
      isOpen={isOpen}
      toggling={toggling}
      onOptionClicked={onOptionClicked}
    />
  );
});
