import PropTypes, { arrayOf } from "prop-types";

export const dataConverter = (itemsList, key, value, innerKey) => {
  return itemsList?.reduce((accumulator, currentValue) => {
    if (!innerKey) {
      return (
        (accumulator[currentValue[key]] = currentValue[value]), accumulator
      );
    }
    return (
      (accumulator[currentValue[key][innerKey]] = currentValue[value]),
      accumulator
    );
  }, {});
};
dataConverter.propTypes = {
  itemsList: arrayOf(PropTypes.object).isRequired,
  key: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  innerKey: PropTypes.string,
};
