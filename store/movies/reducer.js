import { FETCH_MOVIES, START_GAME } from "./action";
import { UPDATED_GAME, GET_GAME } from "../games/action";
const initialState = {
  game: null,
  gameMovies: [],
  indexOfMovieToDisplay: 0,
};

export default function (state = initialState, action) {
  // console.log("movies redicer", action.payload, action.type);
  switch (action.type) {
    case START_GAME:
      // console.log("game start in reducer", action.payload);
      return {
        ...state,
        game: action.payload,
      };
    case UPDATED_GAME: {
      // console.log("action payload in reducer", action.payload);

      return {
        ...state,
        gameMovies: action.payload,
      };
    }
    case GET_GAME:
      {
        return {
          ...state,
          game: action.payload,
          gameMovies: action.payload.gameMovies,
        };
      }
      ``;

    default:
      return state;
  }
}
