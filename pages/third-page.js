import React, { useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { selectMovies } from "../store/movies/selector";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../store/movies/action";
import StartGamePage from "../pages/second-page";
import { Card } from "react-native-elements";
import { gameMovies } from "../store/movies/action";
import { selectGame } from "../store/movies/selector";

export default function ThirdPage({ route }) {
  const genresToCompare = route.params.genre;
  const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const game = useSelector(selectGame);

  console.log("gamessssss", game);

  function onClickHandler() {
    console.log("click");
  }
  // console.log("ids and overwiev", movieIdsandOverwiev);
  useEffect(() => {
    dispatch(getMovies(genresToCompare));
  }, []);
  // console.log("Genres that has been chosen: ", genresToCompare);
  // console.log("Movies of our genres; ", movies);
  const styles = StyleSheet.create({
    contentContainer: {
      paddingVertical: 20,
    },
    buttonContant: {
      margin: 20,
      padding: 20,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
  });

  return (
    <View>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        // horizontal={true}
      >
        {movies.map((movie) => {
          return (
            <Card key={movie.id}>
              <Text>
                <Text style={{ fontWeight: "bold" }}>Title:</Text> {movie.title}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>Description: </Text>
                {movie.overview}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>Release date: </Text>
                {movie.release_date}
                {"\n"}
                <Text style={{ fontWeight: "bold" }}>Reiting: </Text>
                {movie.vote_average}
                {"\n"}
              </Text>
              <Button
                title="I do like"
                contentContainerStyle={styles.buttonContant}
                onPress={() => {
                  dispatch(gameMovies(movie, game.id));
                }}
              ></Button>
              <Button
                title="I don't like"
                contentContainerStyle={styles.buttonContant}
              ></Button>
            </Card>
          );
        })}
        <Button title="To call a function"></Button>
      </ScrollView>
    </View>
  );
}
