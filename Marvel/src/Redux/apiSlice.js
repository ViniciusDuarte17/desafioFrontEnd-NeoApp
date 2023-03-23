import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { BASE_URL } from "../Constants/BASE_URL";
import { TS, API_KEY, HASH } from "../KEY/securityKey";

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    comics: [],
    status: null,
    error: null,
  },

  reducers: {
    getData: (state) => {
      state.status = 'loading';
    },
    getDataSuccess: (state, action) => {
      state.comics = action.payload;
      state.status = 'success';
      state.error = null;
    },
    getDataFailure: (state, action) => {
      state.comics = [];
      state.status = 'failure';
      state.error = action.payload;
    },
  },
});

export const { getData, getDataSuccess, getDataFailure } = apiSlice.actions;

export const fetchData = (limit, offset) => async (dispatch) => {
  dispatch(getData());

  if(!limit || !offset){
    limit = 12 
    offset = 2
  }

  try {
    const response = await axios
    .get(`${BASE_URL}/comics?ts=${TS}&format=comic&formatType=comic&limit=${limit}&offset=${offset}&apikey=${API_KEY}&hash=${HASH}`)
    dispatch(getDataSuccess(response.data));
  } catch (error) {
    dispatch(getDataFailure(error.message));
  }
};

export default apiSlice.reducer;