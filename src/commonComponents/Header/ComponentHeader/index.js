import { memo } from "react";

import PropTypes, { arrayOf, objectOf } from "prop-types";

import { Header } from "../HeaderStyledComponents";
import { LinkItems } from "./LinkItems";

export const ComponentHeader = memo(({ categories, currencies }) => {
  return (
    <Header>
      {categories?.map(({ name }) => (
        <LinkItems key={name} name={name} />
      ))}
      <select name="1" id="1">
        {currencies.currencies?.map(({ label, symbol }) => (
          <option key={label} value={label}>
            {symbol} {label}
          </option>
        ))}
      </select>
    </Header>
  );
});
ComponentHeader.propTypes = {
  categories: arrayOf(PropTypes.object).isRequired,
  currencies: objectOf(PropTypes.array).isRequired,
};
