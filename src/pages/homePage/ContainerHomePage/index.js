import { useSelector } from "react-redux";
import { useLocation } from "react-router";

import { GET_PRODUCTS } from "../../../graphQL/query";

import { ComponentHomePage } from "../ComponentHomePage";

import { useFetchGraphQl } from "../../../hooks";
import { FilterPagesCategory } from "../../../utils/FilterPagesCategory";

export const ContainerHomePage = () => {
  const { currentCurrencies } = useSelector((state) => state.currencies);

  const path = useLocation();

  const pathName = path.pathname.slice(1);

  const [dataProducts] = useFetchGraphQl(GET_PRODUCTS);

  const productCategoryList = FilterPagesCategory(
    dataProducts?.categories,
    pathName
  );

  return (
    <ComponentHomePage
      pathName={pathName}
      currentCurrencies={currentCurrencies}
      productCategoryList={productCategoryList}
    />
  );
};
