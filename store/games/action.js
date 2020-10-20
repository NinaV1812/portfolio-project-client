import axios from "axios";
import { urlToDB } from "../../config/constant";
import { simpleUrl } from "../../config/constant";

export const GAME_CODE = "GAME_CODE";
export const UPDATED_GAME = "UPDATED_GAME";

export const GetGameCode = (codeOfTheGame) => ({
  type: GAME_CODE,
  payload: codeOfTheGame,
});

export const GenresUpdated = (updatedGame) => ({
  type: UPDATED_GAME,
  payload: updatedGame,
});

export const gameCode = (code, name) => {
  return async (dispatch, getState) => {
    try {
      const response = await axios.post(`${simpleUrl}/game/${code}`, {
        code: code,
        name: name,
      });
      console.log("mmm");

      const gameDetails = response.data;
      console.log("Yep!", response.data);
      dispatch(GetGameCode(gameDetails));
    } catch (err) {
      err.response;
    }
  };
};

export const updateGenres = (gameId, genres) => {
  return async (dispatch, getState) => {
    console.log("getState", getState());
    const response = await axios.patch(`${simpleUrl}/game/${gameId}`, {
      genres,
    });
    console.log("AAAAAA", response.data);
    dispatch(GenresUpdated(response.data));
  };
};
