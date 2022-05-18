import { dataConverter } from "../../../utils/dataConverter";
import PropTypes from "prop-types";

export const ComponentHomePage = ({
  currentCurrencies,
  productCategoryList,
}) => {
  return (
    <div>
      {productCategoryList.products.map(({ id, name, prices }) => (
        <div key={id} id={id}>
          <p>{name}</p>
          <p>
            {
              dataConverter(prices, "currency", "amount", "label")[
                currentCurrencies
              ]
            }
          </p>
        </div>
      ))}
    </div>
  );
};
ComponentHomePage.propTypes = {
  productCategoryList: PropTypes.shape({
    name: PropTypes.string,
    products: PropTypes.array,
    __typename: PropTypes.string,
  }),
  currentCurrencies: PropTypes.string.isRequired,
};
