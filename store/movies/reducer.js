import { FETCH_MOVIES } from "./action";
const initialState = [];

export default function (state = initialState, action) {
  //   console.log("movies redicer", action.payload);
  switch (action.type) {
    case FETCH_MOVIES: {
      return action.payload;
    }
    default:
      return state;
  }
}
