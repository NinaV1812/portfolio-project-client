import { combineReducers } from "redux";
import genres from "./genres/reducer";
import movies from "./movies/reducer";
import game from "./games/reducer";

export default combineReducers({
  genres,
  movies,
  game,
});
