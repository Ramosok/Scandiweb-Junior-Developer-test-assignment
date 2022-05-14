import { useQuery } from "@apollo/client";
import { memo, useEffect, useState } from "react";

import { GET_CATEGORIES } from "../../../graphQL/query";
import { ComponentHeader } from "../ComponentHeader";

export const ContainerHeader = memo(() => {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (error) {
      console.log("error");
    }
    if (!loading && !error) {
      setCategories(data.categories);
    }
  }, [data, loading, error]);

  return <ComponentHeader categories={categories} />;
});
