import { memo } from "react";

import PropTypes, { arrayOf } from "prop-types";

import { Header } from "../HeaderStyledComponents";
import { LinkItems } from "./LinkItems";

export const ComponentHeader = memo(({ categories }) => {
  return (
    <Header>
      {categories?.map(({ name }) => (
        <LinkItems key={name} name={name} />
      ))}
    </Header>
  );
});
ComponentHeader.propTypes = {
  categories: arrayOf(PropTypes.object).isRequired,
};
