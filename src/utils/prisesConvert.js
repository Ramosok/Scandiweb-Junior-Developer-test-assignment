export const prisesConvert = (pricesList) => {
  return pricesList.reduce(
    (acc, n) => ((acc[n.currency.label] = n.amount), acc),
    {}
  );
};
