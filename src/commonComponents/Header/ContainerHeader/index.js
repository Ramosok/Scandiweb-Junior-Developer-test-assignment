import { memo, useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { useFetchGraphQl } from "../../../hooks";

import { GET_CATEGORIES, GET_CURRENCIES } from "../../../graphQL/query";

import { ComponentHeader } from "../ComponentHeader";

import { handleChangeCurrencies } from "../actions";

export const ContainerHeader = memo(() => {
  const getLocalStorage = JSON.parse(localStorage.getItem("currencies"));

  const [categories] = useFetchGraphQl(GET_CATEGORIES, {});
  const [currencies] = useFetchGraphQl(GET_CURRENCIES, {});
  const [select, setSelect] = useState(getLocalStorage || "USD");

  const dispatch = useDispatch();

  const selectValue = (event) => {
    const { value } = event.target;
    setSelect(value);
  };
  useEffect(() => {
    dispatch(handleChangeCurrencies(select));
    localStorage.setItem("currencies", JSON.stringify(select));
  }, [select, dispatch]);

  return (
    <ComponentHeader
      categories={categories}
      currencies={currencies}
      selectValue={selectValue}
      select={select}
      getLocalStorage={getLocalStorage}
    />
  );
});
