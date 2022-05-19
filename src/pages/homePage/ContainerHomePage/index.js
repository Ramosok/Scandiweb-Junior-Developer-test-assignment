import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useCallback } from "react";

import { getCurrencies } from "../../../commonComponents/Header/selectors";

import { GET_PRODUCTS } from "../../../graphQL/query";

import { ComponentHomePage } from "../ComponentHomePage";

import { useFetchGraphQl } from "../../../hooks";

import { FilterPagesCategory } from "../../../utils/FilterPagesCategory";

import { getProductId } from "../actions";

export const ContainerHomePage = () => {
  const { currentCurrencies } = useSelector(getCurrencies);
  const dispatch = useDispatch();

  const path = useLocation();

  const pathName = path.pathname.slice(1);

  const [dataProducts] = useFetchGraphQl(GET_PRODUCTS);

  const productCategoryList = FilterPagesCategory(
    dataProducts?.categories,
    pathName
  );

  const getProduct = useCallback(
    (id) => {
      dispatch(getProductId(id));
    },
    [dispatch]
  );

  return (
    <ComponentHomePage
      pathName={pathName}
      currentCurrencies={currentCurrencies}
      productCategoryList={productCategoryList}
      getProduct={getProduct}
    />
  );
};
