import { FETCH_MOVIES, START_GAME } from "./action";
const initialState = {
  movies: [],
  game: null,
};

export default function (state = initialState, action) {
  // console.log("movies redicer", action.payload, action.type);
  switch (action.type) {
    case FETCH_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }
    case START_GAME:
      // console.log("game start in reducer", action.payload);
      return {
        ...state,
        game: action.payload,
      };

    default:
      return state;
  }
}
