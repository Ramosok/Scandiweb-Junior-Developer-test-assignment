import { dataConverter } from "../../../utils/dataConverter";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { ROUTE_NAMES } from "../../../Routers/routeNames";

export const ComponentHomePage = ({
  currentCurrencies,
  productCategoryList,
  pathName,
}) => {
  return (
    <div>
      <h1>{pathName}</h1>
      {productCategoryList?.products.map(({ id, name, prices }) => (
        <div key={id} id={id}>
          <p>
            <Link to={`${id}`}>{name}</Link>
          </p>
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
  pathName: PropTypes.string,
  currentCurrencies: PropTypes.string.isRequired,
};
