import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../../graphQL/query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { prisesConvert } from "../../../utils/prisesConvert";

export const ComponentHomePage = () => {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const { currentCurrencies } = useSelector((state) => state.currencies);
  const path = useLocation();

  const pathName = path.pathname.slice(1);

  useEffect(() => {
    if (!loading) {
      setProducts(data);
    }
  }, [data, loading]);

  const productList = products.categories?.find(
    (item) => item.name === `${pathName}`
  );

  return (
    <div>
      {productList?.products.map(({ id, name, prices }) => (
        <div key={id} id={id}>
          <p>{name}</p>
          <p>{prisesConvert(prices)[currentCurrencies]}</p>
        </div>
      ))}
    </div>
  );
};
