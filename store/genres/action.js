import axios from "axios";
import { apiUrl } from "../../config/constant";

export const FETCH_GENRES = "FETCH_GENRES";

export const fetchGenres = (genres) => ({
    type: FETCH_GENRES,
    payload: genres,
  });

  export const getGenres = () => {
      return async(dispatch, getState) => {
          try {
              const response = await axios.get(`${apiUrl}/genres`)
                console.log("response", response)

          }catch (err) {
            (err.response)
          }
      }
  }