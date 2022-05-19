import { combineReducers } from "@reduxjs/toolkit";

import { currenciesReducer } from "../commonComponents/Header/reducers";
import { getProductReducer } from "../pages/homePage/reducers";

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
  productId: getProductReducer,
});
