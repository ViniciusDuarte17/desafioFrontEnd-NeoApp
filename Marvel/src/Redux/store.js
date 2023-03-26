import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";

import apiReducer from "./apiSlice"
import cartSlice from "./cartSlice"

export const store = configureStore({
  reducer: {
    api: apiReducer,
    cartSlice: cartSlice,
  },
  middleware: [thunkMiddleware],
})