import { configureStore } from '@reduxjs/toolkit'
import thunkMiddleware from "redux-thunk";

import apiReducer from "./apiSlice"

export const store = configureStore({
  reducer: {
    api: apiReducer,
  },
  middleware: [thunkMiddleware],
})