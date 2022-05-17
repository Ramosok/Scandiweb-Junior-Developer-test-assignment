import { memo } from "react";

import { useFetchGraphQl } from "../../../hooks";

import { GET_CATEGORIES, GET_CURRENCIES } from "../../../graphQL/query";
import { ComponentHeader } from "../ComponentHeader";

export const ContainerHeader = memo(() => {
  const [categories] = useFetchGraphQl(GET_CATEGORIES, {});
  const [currencies] = useFetchGraphQl(GET_CURRENCIES, {});

  return <ComponentHeader categories={categories} currencies={currencies} />;
});
