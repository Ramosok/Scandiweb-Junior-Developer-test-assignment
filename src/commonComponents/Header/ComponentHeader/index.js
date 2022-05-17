import PropTypes, { func, objectOf, string } from "prop-types";
import { Link } from "react-router-dom";

import { Header } from "../HeaderStyledComponents";

import { ROUTE_NAMES } from "../../../Routers/routeNames";

import { SelectItems } from "./SelectItems";
import { NavBar } from "./NavBar";

import cartImg from "./../../../static/img/cart.png";
import brandIcon from "./../../../static/img/BrandIcon.png";
import { TestSelect } from "./TestSelect";

export const ComponentHeader = ({
  categories,
  currencies,
  select,
  selectValue,
  getLocalStorage,
}) => {
  return (
    <Header>
      <NavBar categories={categories} />
      <div style={{ alignSelf: "center", marginRight: "120px" }}>
        <Link to={ROUTE_NAMES.ALL}>
          <img src={brandIcon} alt="brand icon" />
        </Link>
      </div>
      <div style={{ alignSelf: "center" }}>
        <SelectItems
          currencies={currencies}
          select={select}
          selectValue={selectValue}
          getLocalStorage={getLocalStorage}
        />
        <Link to={ROUTE_NAMES.CART}>
          <img src={cartImg} alt="cart" />
        </Link>
      </div>
      <div>
        <TestSelect
          currencies={currencies}
          select={select}
          selectValue={selectValue}
          getLocalStorage={getLocalStorage}
        />
      </div>
    </Header>
  );
};
ComponentHeader.propTypes = {
  categories: objectOf(PropTypes.array).isRequired,
  currencies: objectOf(PropTypes.array).isRequired,
  selectValue: func.isRequired,
  select: PropTypes.string.isRequired,
  getLocalStorage: PropTypes.string.isRequired,
};
