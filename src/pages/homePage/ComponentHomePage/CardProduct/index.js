import { Link } from "react-router-dom";

import { dataConverter } from "../../../../utils/dataConverter";

import { ROUTE_NAMES } from "../../../../Routers/routeNames";

import styles from "./../../homePage.module.scss";

import cartImg from "./../../../../static/img/cart.png";

export const CardProduct = ({
  id,
  name,
  pathName,
  inStock,
  currentCurrencies,
  gallery,
  prices,
  getProduct,
}) => {
  const currentCurrenciesMap = dataConverter(
    prices,
    "currency",
    "amount",
    "label"
  );
  const currentPath = pathName.toUpperCase();

  //throw new Error("I crashed!");
  return (
    <div id={id} className={styles.card}>
      <Link
        onClick={() => getProduct(id)}
        to={`${ROUTE_NAMES[currentPath]}${id}`}
      >
        <div key={id}>
          {inStock && <p className={styles.out_of_stock}>out of stock</p>}
          <img
            className={inStock ? styles.is_stock : null}
            height="356"
            width="338"
            src={gallery[0]}
            alt={name}
          />
          <p>{name}</p>
          <p>{currentCurrenciesMap[currentCurrencies]}</p>
        </div>
      </Link>
      <button
        className={styles.btn_add_cart}
        onClick={() => console.log("add")}
      >
        <img src={cartImg} alt="Cart" />
      </button>
    </div>
  );
};
