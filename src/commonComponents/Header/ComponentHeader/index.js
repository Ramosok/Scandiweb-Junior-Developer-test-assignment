import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes, { arrayOf, objectOf } from "prop-types";

import { Header } from "../HeaderStyledComponents";
import { LinkItems } from "./LinkItems";
import { handleChangeCurrencies } from "../actions";

export const ComponentHeader = ({ categories, currencies }) => {
  const getLocalStorage = JSON.parse(localStorage.getItem("currencies"));
  const dispatch = useDispatch();
  const [select, setSelect] = useState(getLocalStorage || "USD");

  const selectValue = (event) => {
    const { value } = event.target;
    setSelect(value);
  };
  useEffect(() => {
    dispatch(handleChangeCurrencies(select));
    localStorage.setItem("currencies", JSON.stringify(select));
  }, [select, dispatch]);

  return (
    <Header>
      {categories?.map(({ name }) => (
        <LinkItems key={name} name={name} />
      ))}
      <select name={select} id={select} onChange={selectValue}>
        {currencies.currencies?.map(({ label, symbol }) => (
          <option
            selected={getLocalStorage === label}
            key={label}
            value={label}
          >
            {symbol} {label}
          </option>
        ))}
      </select>
    </Header>
  );
};
ComponentHeader.propTypes = {
  categories: arrayOf(PropTypes.object).isRequired,
  currencies: objectOf(PropTypes.array).isRequired,
};
