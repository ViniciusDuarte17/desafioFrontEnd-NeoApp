import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// import { BASE_URL } from "../Constants/BASE_URL";
import { TS, API_KEY, HASH } from "../KEY/securityKey";

const BASE_URL = 'https://gateway.marvel.com:443/v1/public'

export const apiSlice = createSlice({
  name: 'api',
  initialState: {
    comics: [],
    currentPage: 1,
    pageSize: 20,
    totalResults: 0,
    status: null,
    error: null,
  },

  reducers: {

    getComics: (state) => {
      state.status = 'loading';
    },

    getComicsSuccess: (state, action) => {
      state.comics = action.payload;
      state.status = 'success';
      state.error = null;
    },

    getComicsFailure: (state, action) => {
      state.comics = [];
      state.status = 'failure';
      state.error = action.payload;
    },

    // Paginação 
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },

    setPageSize: (state, action) => {
      state.pageSize = action.payload
    },

    setTotalResults: (state, action) => {
      state.totalResults = action.payload
    },
  },
});

export const {
  getComics,
  getComicsSuccess,
  getComicsFailure,
  setCurrentPage,
  currentPage,
  pageSize,
  totalResults,
  setPageSize,
  setTotalResults
} = apiSlice.actions;

export const fetchComics = (pageSize, currentPage) => async (dispatch) => {
  dispatch(getComics());

  try {
    const response = await axios
      .get(`${ BASE_URL }/comics?ts=${TS}&format=comic&formatType=comic&limit=${pageSize}
      &offset=${(currentPage - 1) * pageSize}&apikey=${API_KEY}&hash=${HASH}`)

    dispatch(getComicsSuccess(response.data));
  } catch (error) {
    dispatch(getComicsFailure(error.message));
  }
};

export default apiSlice.reducer;