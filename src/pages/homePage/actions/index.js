import { createAction } from "@reduxjs/toolkit";

export const getProductId = createAction("GET_PRODUCT_ID", (data) => ({
  payload: data,
}));
