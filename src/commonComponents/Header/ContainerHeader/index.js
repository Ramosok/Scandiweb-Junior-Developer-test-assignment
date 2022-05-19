import { memo, useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useFetchGraphQl } from "../../../hooks";

import { GET_CATEGORIES, GET_CURRENCIES } from "../../../graphQL/query";

import { ComponentHeader } from "../ComponentHeader";

import { handleChangeCurrencies } from "../actions";

import { dataConverter } from "../../../utils/dataConverter";

import { getCurrencies } from "../selectors";

export const ContainerHeader = memo(() => {
  const { currentCurrencies } = useSelector(getCurrencies);
  const [categories] = useFetchGraphQl(GET_CATEGORIES, {});
  const [currencies] = useFetchGraphQl(GET_CURRENCIES, {});
  const [selectedOption, setSelectedOption] = useState(
    currentCurrencies || "USD"
  );
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const onOptionClicked = useCallback(
    (label) => () => {
      setSelectedOption(label);
      setIsOpen(false);
    },
    [selectedOption]
  );
  const toggling = useCallback(() => setIsOpen(!isOpen), [isOpen]);

  useEffect(() => {
    dispatch(handleChangeCurrencies(selectedOption));
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
