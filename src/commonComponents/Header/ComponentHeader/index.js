import PropTypes, { func, objectOf } from "prop-types";
import { Link } from "react-router-dom";

import { Block, Header } from "../HeaderStyledComponents";

import { ROUTE_NAMES } from "../../../Routers/routeNames";

import { NavBar } from "./NavBar";
import { SelectItem } from "./SelectItem";

import cartImg from "./../../../static/img/cart.png";
import brandIcon from "./../../../static/img/BrandIcon.png";

export const ComponentHeader = ({
  categories,
  currencies,
  selectedOption,
  getSymbol,
  isOpen,
  toggling,
  onOptionClicked,
}) => {
  return (
    <Header>
      <NavBar categories={categories} />
      <Block>
        <Link to={ROUTE_NAMES.ALL}>
          <img src={brandIcon} alt="brand icon" />
        </Link>
      </Block>
      <Block>
        <SelectItem
          currencies={currencies}
          selectedOption={selectedOption}
          getSymbol={getSymbol}
          isOpen={isOpen}
          toggling={toggling}
          onOptionClicked={onOptionClicked}
        />
        <div>
          <Link to={ROUTE_NAMES.CART}>
            <img src={cartImg} alt="cart" />
          </Link>
        </div>
      </Block>
    </Header>
  );
};
ComponentHeader.propTypes = {
  categories: objectOf(PropTypes.array).isRequired,
  currencies: objectOf(PropTypes.array).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggling: func.isRequired,
  onOptionClicked: func.isRequired,
  selectedOption: PropTypes.string.isRequired,
};
