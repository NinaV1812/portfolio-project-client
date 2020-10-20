import axios from "axios";
import { moviesApi, simpleUrl } from "../../config/constant";

export const FETCH_MOVIES = "FETCH_MOVIES";
export const START_GAME = "START_GAME";
export const MOVIES_INGAME = "MOVIES_INGAME";

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

export const getMovies = (genres) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(
        `${moviesApi}&with_genres=${genres.join(",")}`
      );
      const movies = response.data.results;
      console.log("Yep!");
      dispatch(FetchMovies(movies));
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
      console.log("response", response.data);

      dispatch(StartGame(response.data));
    } catch (err) {
      err.response;
    }
  };
};

export const gameMovies = (movie, gameId) => {
  return async (dispatch, getState) => {
    console.log("called");
    try {
      console.log("string");
      const response = await axios.post(`${simpleUrl}/movies_in_game`, {
        movie: movie,
        gameId: gameId,
      });
      console.log("response", response.data);
      // console.log("movie", movie);

      dispatch(MoviesInGame(response.data));
    } catch (err) {
      err.response;
    }
  };
};
