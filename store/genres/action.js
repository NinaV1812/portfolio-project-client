import axios from "axios";
import { apiUrl } from "../../config/constant";

export const FETCH_GENRES = "FETCH_GENRES";

export const fetchGenres = (genres) => ({
  type: FETCH_GENRES,
  payload: genres,
});

export const getGenres = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${apiUrl}/genres`);
      //    console.log("response", response.data.genres)
      const genres = response.data.genres;
      dispatch(fetchGenres(genres));
    } catch (err) {
      err.response;
    }
  };
};

export const setUpGame = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/set_up_game`, {
        code,
        started,
      });
      // console.log("Yep!", response);
    } catch (err) {
      err.response;
    }
  };
};

export const joinTheGame = () => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${apiUrl}/join`, {
        gameId: game.id,
        movieId,
        title,
        overview,
      });
      // console.log("Yep!", response);
    } catch (err) {
      err.response;
    }
  };
};
