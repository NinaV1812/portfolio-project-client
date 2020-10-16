import { combineReducers } from "redux";
import genres from "./genres/reducer";
import movies from "./movies/reducer";

export default combineReducers({
  genres,
  movies,
});
