import { useQuery } from "@apollo/client";
import { GET_PRODUCTS } from "../../../graphQL/query";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ComponentClothesPage = () => {
  const { data, loading } = useQuery(GET_PRODUCTS);
  const [products, setProducts] = useState([]);
  const { currentCurrencies } = useSelector((state) => state.currencies);

  useEffect(() => {
    if (!loading) {
      setProducts(data);
    }
  }, [data, loading]);

  const arr = products.categories?.find((item) => item.name === "all");

  const prisesConvert = (pricesList) => {
    return pricesList.reduce(
      (acc, n) => ((acc[n.currency.label] = n.amount), acc),
      {}
    );
  };

  return (
    <div>
      {arr?.products.map(({ id, name, prices }) => (
        <div key={id} id={id}>
          <p>{name}</p>
          <p>{prisesConvert(prices)[currentCurrencies]}</p>
        </div>
      ))}
    </div>
  );
};
