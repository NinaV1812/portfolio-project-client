import { FETCH_MOVIES, START_GAME } from "./action";
const initialState = [];

export default function (state = initialState, action) {
  //   console.log("movies redicer", action.payload);
  switch (action.type) {
    case FETCH_MOVIES: {
      return action.payload;
    }
    case START_GAME:
      console.log("game start in reducer", action.payload);
      return [...state, action.payload];

    default:
      return state;
  }
}
