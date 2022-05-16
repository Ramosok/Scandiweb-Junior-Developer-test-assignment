import { createAction } from "@reduxjs/toolkit";

export const handleChangeCurrencies = createAction(
  "HANDLE_CHANGE_CURRENCIES",
  (data) => ({ payload: data })
);
