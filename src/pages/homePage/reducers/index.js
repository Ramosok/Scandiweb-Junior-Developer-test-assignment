import { createReducer } from "@reduxjs/toolkit";
import { getProductId } from "../actions";

const initialState = {
  id: null,
};
export const getProductReducer = createReducer(initialState, {
  [getProductId]: (state, { payload }) => ({
    id: payload,
  }),
});
