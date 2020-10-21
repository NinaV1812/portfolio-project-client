import React, { useEffect, useState } from "react";
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
import { Card } from "react-native-elements";
import { gameMovies } from "../store/movies/action";
import { selectGame } from "../store/movies/selector";
import { selectMoviesGames } from "../store/movies/selector";

export default function ThirdPage({ route }) {
  const genresToCompare = route.params.genre;
  // const movies = useSelector(selectMovies);
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const movies = useSelector(selectMoviesGames);
  const [movieIdToShow, setMovieIdToShow] = useState(0);

  console.log("gamessssss", game);

  // console.log("game movies", movies);

  useEffect(() => {
    // dispatch(getMovies(genresToCompare));
  }, []);
  // useEffect(() => {
  //   dispatch(fetchMovieById(movieIdToShow));
  // }, [movieIdToShow]); //because when this changes we want to fetch the next movie

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
  useEffect(() => {}, []);
  function toDispatch() {
    const movie = movies[movieIdToShow];
    dispatch(gameMovies(movie, game.id));
  }

  function changeFilm() {
    setMovieIdToShow(movieIdToShow + 1);
  }
  function combine() {
    toDispatch();
    changeFilm();
  }

  console.log("game movies", movies);
  const movie = movies[movieIdToShow];
  console.log("movie", movie);

  if (movie) {
    return (
      <View>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          <Card key={movie.id}>
            <Text style={{ fontWeight: "bold" }}>Title: </Text>

            <Text>
              {movie.title}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Description:</Text>
            <Text>
              {" "}
              {movie.overview}
              {"\n"}
            </Text>

            <Text style={{ fontWeight: "bold" }}>Release date: </Text>
            <Text>
              {movie.release_date}
              {"\n"}
            </Text>

            <Text style={{ fontWeight: "bold" }}>Rating: </Text>
            <Text>
              {movie.vote_average} {"\n"}
            </Text>
            <Button
              title="I do like"
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                combine();
              }}
            ></Button>
            <Button
              title="I don't like"
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                setMovieIdToShow(MovieIdToShow + 1);
              }}
            ></Button>
            <Button title="To call a function"></Button>
          </Card>
        </ScrollView>
        <Text>Hello</Text>
      </View>
    );
  }
  {
    return <Text>Loading</Text>;
  }
}
