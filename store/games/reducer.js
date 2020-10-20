import { UPDATED_GAME } from "../games/action";
const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPDATED_GAME: {
      console.log("state", state);
      //   return {...state, action.payload};
    }

    default:
      console.log("this state", state);
      return state;
  }
}
