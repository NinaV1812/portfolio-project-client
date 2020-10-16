import axios from "axios";
import { moviesApi, simpleUrl } from "../../config/constant";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const START_GAME = "START_GAME";

export const FetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const StartGame = (game) => ({
  type: START_GAME,
  payload: game,
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

export const setUpGame = (code, started) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`http://127.0.0.1:4000/set_up_game`, {
        code,
        started,
      });
      console.log("response", response);

      dispatch(StartGame(response.data));
    } catch (err) {
      err.response;
    }
  };
};
