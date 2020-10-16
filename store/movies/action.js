import axios from "axios";
import { moviesApi } from "../../config/constant";

export const FETCH_MOVIES = "FETCH_MOVIES";

export const FetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const getMovies = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${moviesApi}/game_movies`);
      const movies = response.data.results;
      // console.log("Yep!", FetchMovies(movies));
      dispatch(FetchMovies(movies));
    } catch (err) {
      err.response;
    }
  };
};
