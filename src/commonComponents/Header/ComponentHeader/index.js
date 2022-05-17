import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes, { objectOf } from "prop-types";

import { Header } from "../HeaderStyledComponents";
import { LinkItems } from "./LinkItems";
import { handleChangeCurrencies } from "../actions";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../Routers/routeNames";

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
      {categories?.categories?.map(({ name }) => (
        <LinkItems key={name} name={name} />
      ))}
      <select name={select} id={select} value={select} onChange={selectValue}>
        {currencies.currencies?.map(({ label, symbol }) => (
          <option
            defaultValue={getLocalStorage === label}
            key={label}
            value={label}
          >
            {symbol} {label}
          </option>
        ))}
      </select>
      <div>
        <Link to={ROUTE_NAMES.CART}>CART</Link>
      </div>
    </Header>
  );
};
ComponentHeader.propTypes = {
  categories: objectOf(PropTypes.array).isRequired,
  currencies: objectOf(PropTypes.array).isRequired,
};
