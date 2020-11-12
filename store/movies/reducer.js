import { FETCH_MOVIES, START_GAME, COMMON_MOVIES } from "./action";
import { UPDATED_GAME, GET_GAME } from "../games/action";
const initialState = {
  game: null,
  gameMovies: [],
  indexOfMovieToDisplay: 0,
  commonMovies: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case START_GAME:
      return {
        ...state,
        game: action.payload,
      };
    case UPDATED_GAME: {
      return {
        ...state,
        gameMovies: action.payload,
      };
    }
    case GET_GAME: {
      return {
        ...state,
        game: action.payload,
        gameMovies: action.payload.gameMovies,
      };
    }
    case COMMON_MOVIES: {
      return {
        ...state,
        commonMovies: action.payload,
      };
    }

    default:
      return state;
  }
}
