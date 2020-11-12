import axios from "axios";
import { urlToDB } from "../../config/constant";
import { simpleUrl } from "../../config/constant";

export const GAME_CODE = "GAME_CODE";
export const UPDATED_GAME = "UPDATED_GAME";
export const GET_GAME = "GET_GAME";

export const GetGameCode = (codeOfTheGame) => ({
  type: GAME_CODE,
  payload: codeOfTheGame,
});

export const GenresUpdated = (updatedGame) => ({
  type: UPDATED_GAME,
  payload: updatedGame,
});

export const UserChoice = (choice) => ({
  type: MADE_CHOICE,
  payload: choice,
});

export const GetGame = (gameInfo) => ({
  type: GET_GAME,
  payload: gameInfo,
});

export const gameCode = (code, name) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${simpleUrl}/game/${code}`, {
        code: code,
        name: name,
      });

      const gameDetails = response.data;
      dispatch(GetGameCode(gameDetails));
    } catch (err) {
      err.response;
    }
  };
};

export const getGame = (code) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.get(`${simpleUrl}/game/${code}`);

      const gameDetails = response.data;
      dispatch(GetGame(gameDetails));
    } catch (err) {
      err.response;
    }
  };
};

export const madeChoise = (gameMovieId) => {
  return async (dispatch, getState) => {
    const response = await axios.post(`${simpleUrl}/game/choice`, {
      gameMovieId: gameMovieId,
    });
    dispatch(UserChoice(response.data));
  };
};

export const updateGenres = (gameId, genres) => {
  return async (dispatch, getState) => {
    const response = await axios.patch(`${simpleUrl}/game/${gameId}`, {
      genres: genres,
    });
    dispatch(GenresUpdated(response.data));
  };
};
