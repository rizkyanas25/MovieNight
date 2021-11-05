import HitApi from "../../Helpers/HitApi";

import actionTypes from "./actionTypes";

export const successGetMovies = (payload) => ({
  type: actionTypes.GET_MOVIES,
  payload: { ...payload },
});

export const successGetMovie = (payload) => ({
  type: actionTypes.GET_MOVIE,
  payload: { ...payload },
});

export const getMovies = (dispatch) => (params) => {
  return new Promise(async (resolve, reject) => {

    let query = ''

    if (params) {
      if (params.search) {
        query += `&s=${params.search}`
      }
      if (params.page) {
        query += `&page=${params.page}`;
      }
    }

    const response = await HitApi(
      "get",
      "https://www.omdbapi.com/?apikey=39acf9b8" + query,
    );

    console.log(`response`, JSON.stringify(response))

    if (response.status === 200) {
      resolve(dispatch(successGetMovies({data: response.data})))
    } else {
      reject(response.statustext)
    }
  });
};

export const getMovie = (dispatch) => (params) => {
  return new Promise(async (resolve, reject) => {
    let query = "";

    if (params) {
      if (params.id) {
        query += `&i=${params.id}`;
      }
    }

    const response = await HitApi(
      "get",
      "https://www.omdbapi.com/?apikey=39acf9b8" + query
    );

    console.log(`response`, response);

    if (response.status === 200) {
      resolve(dispatch(successGetMovie({ data: response.data })));
    } else {
      reject(response.statustext);
    }
  });
};