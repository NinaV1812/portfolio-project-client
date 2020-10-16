import { FETCH_GENRES } from "./action";
const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GENRES: {
      return action.payload;
    }

    default:
      return state;
  }
}
