import React, { useEffect } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { selectMovies } from "../store/movies/selector";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies/action";
import StartGamePage from "../pages/second-page";

export default function ThirdPage({ route }) {
  const genresToCompare = route.params.genre;
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  // console.log("genresssss", genresToCompare);
  // console.log("moviesssss", movies);
  // const moviesToCompare = movies.filter((genre_ids) => {
  //   return genre_ids;
  // });
  // console.log("filter", moviesToCompare);
  return (
    <View>
      <Text>Hello Nina!</Text>
    </View>
  );
}
