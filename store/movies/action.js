import axios from "axios";
import { moviesApi, simpleUrl } from "../../config/constant";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const START_GAME = "START_GAME";
export const MOVIES_INGAME = "MOVIES_INGAME";
export const COMMON_MOVIES = "COMMON_MOVIES";

export const FetchMovies = (movies) => ({
  type: FETCH_MOVIES,
  payload: movies,
});

export const StartGame = (game) => ({
  type: START_GAME,
  payload: game,
});

export const MoviesInGame = (moviesInGame) => ({
  type: MOVIES_INGAME,
  payload: moviesInGame,
});

export const commonChosenMovies = (commonMovies) => ({
  type: COMMON_MOVIES,
  payload: commonMovies,
});

export const getMovies = (genres) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${moviesApi}&with_genres=${genres.join(",")}`
      );
      const movies = response.data.results;
      dispatch(FetchMovies(movies));
    } catch (err) {
      err.response;
    }
  };
};

export const getCommonMovies = (gameId) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${simpleUrl}/game_movie/${gameId}`);
      const movies = response.data;
      dispatch(commonChosenMovies(movies));
    } catch (err) {
      err.response;
    }
  };
};

export const setUpGame = (started, name) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${simpleUrl}/set_up_game`, {
        started: started,
        name: name,
      });

      dispatch(StartGame(response.data));
    } catch (err) {
      err.response;
    }
  };
};

export const gameMovies = (movieId, gameId, picked) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${simpleUrl}/movies_in_game`, {
        movieId: movieId,
        gameId: gameId,
        picked: picked,
      });
      dispatch(MoviesInGame(response.data));
    } catch (err) {
      err.response;
    }
  };
};
