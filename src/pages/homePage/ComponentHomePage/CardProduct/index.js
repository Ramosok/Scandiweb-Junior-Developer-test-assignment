import { Link } from "react-router-dom";

import { dataConverter } from "../../../../utils/dataConverter";

import { ROUTE_NAMES } from "../../../../Routers/routeNames";

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
  //throw new Error("I crashed!");
  return (
    <div id={id} style={{ position: "relative" }}>
      {inStock && (
        <div
          style={{
            position: "absolute",
            top: "0",
            background: "red",
            opacity: "0.3",
            width: "100%",
            height: "100%",
          }}
        >
          <p>in stock</p>
        </div>
      )}
      <div key={id} id={id}>
        <p>
          <img
            style={{ objectFit: "cover" }}
            height="356"
            width="338"
            src={gallery[0]}
            alt={name}
          />
        </p>
        <p>
          <Link
            onClick={() => getProduct(id)}
            to={`${ROUTE_NAMES[pathName.toUpperCase()]}${id}`}
          >
            {name}
          </Link>
        </p>
        <p>
          {
            dataConverter(prices, "currency", "amount", "label")[
              currentCurrencies
            ]
          }
        </p>
        <button>add cart</button>
      </div>
    </div>
  );
};
