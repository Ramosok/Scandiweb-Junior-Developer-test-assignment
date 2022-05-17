export const dataConverter = (itemsList, key, inner, value) => {
  return itemsList?.reduce(
    (accumulator, currentValue) => (
      (accumulator[currentValue[key][inner]] = currentValue[value]), accumulator
    ),
    {}
  );
};
