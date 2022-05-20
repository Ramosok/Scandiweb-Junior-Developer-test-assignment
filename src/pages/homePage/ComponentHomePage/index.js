import PropTypes from "prop-types";

import { CardProduct } from "./CardProduct";

import ErrorsBoundary from "../../../commonComponents/ErrorsBoundary";

import styles from "./../homePage.module.scss";

export const ComponentHomePage = ({
  currentCurrencies,
  productCategoryList,
  pathName,
  getProduct,
}) => {
  return (
    <div className={styles.container}>
      <h1>{pathName}</h1>
      <ErrorsBoundary>
        <div className={styles.card_container}>
          {productCategoryList?.products.map(
            ({ id, name, prices, inStock, gallery }) => (
              <CardProduct
                key={id}
                id={id}
                name={name}
                pathName={pathName}
                inStock={inStock}
                currentCurrencies={currentCurrencies}
                gallery={gallery}
                prices={prices}
                getProduct={getProduct}
              />
            )
          )}
        </div>
      </ErrorsBoundary>
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
  getProduct: PropTypes.func.isRequired,
};
