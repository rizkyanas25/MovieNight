import actionTypes from "./actionTypes";

const initialState = {
  movies: [],
  movieDetail: null,
};

const setMovies = (state, payload) => ({
  ...state,
  movies: payload.data,
});

const setMovie = (state, payload) => ({
  ...state,
  movieDetail: payload.data,
});

const imageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_MOVIE:
      return setMovie(state, action.payload);
    case actionTypes.GET_MOVIES:
      return setMovies(state, action.payload);
    default:
      return state;
  }
};

export default imageReducer;
