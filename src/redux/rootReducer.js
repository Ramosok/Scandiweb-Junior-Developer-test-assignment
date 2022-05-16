import { combineReducers } from "@reduxjs/toolkit";

import { currenciesReducer } from "../commonComponents/Header/reducers";

export const rootReducer = combineReducers({
  currencies: currenciesReducer,
});
