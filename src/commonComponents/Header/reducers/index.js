import { createReducer } from "@reduxjs/toolkit";

import { handleChangeCurrencies } from "../actions";

const initialState = {
  currentCurrencies: "USD",
};
export const currenciesReducer = createReducer(initialState, {
  [handleChangeCurrencies]: (state, { payload }) => ({
    currentCurrencies: payload,
  }),
});
