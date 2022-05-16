import { useQuery } from "@apollo/client";
import { memo, useEffect, useState } from "react";

import { useFetchGraphQl } from "../../../hooks";

import { GET_CATEGORIES, GET_CURRENCIES } from "../../../graphQL/query";
import { ComponentHeader } from "../ComponentHeader";

export const ContainerHeader = memo(() => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const { data: dataCurrencies, loading: isLoading } = useQuery(GET_CURRENCIES);
  const [categories, setCategories] = useState([]);
  const [currencies, setCurrencies] = useState({});

  useEffect(() => {
    if (error) {
      console.log("error");
    }
    if (!loading && !isLoading) {
      setCategories(data.categories);
      setCurrencies(dataCurrencies);
    }
  }, [data, loading, error, dataCurrencies]);

  const [fetchDataSTR, isLoad, isError] = useFetchGraphQl(GET_CURRENCIES, []);

  return <ComponentHeader categories={categories} currencies={currencies} />;
});
