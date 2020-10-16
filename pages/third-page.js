import React, { useEffect } from "react";
import { Text, View, ScrollView, Image, StyleSheet } from "react-native";
import { selectMovies } from "../store/movies/selector";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies/action";

export default function ThirdPage({ route }) {
  // console.log("genressss", route.params.genre);
  const genresToCompare = route.params.genre;
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  console.log("moviesssss", movies);

  return (
    <View>
      <Text>Hello Nina!</Text>
    </View>
  );
}
