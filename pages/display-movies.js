import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-native-elements";
import { gameMovies } from "../store/movies/action";
import { selectGame } from "../store/movies/selector";
import { selectMoviesGames } from "../store/movies/selector";
import { getGame } from "../store/games/action";
import { styles } from "../styles";

export default function ThirdPage({ navigation, route }) {
  const gameCode = route.params.code;
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const movies = useSelector(selectMoviesGames);
  const [movieIdToShow, setMovieIdToShow] = useState(0);
  // console.log("movies", movies);

  useEffect(() => {
    dispatch(getGame(gameCode));
  }, []);

  function toDispatch() {
    const picked = true;
    const movie = movies[movieIdToShow];
    dispatch(gameMovies(movie.id, game.id, picked));
  }

  function changeFilm() {
    setMovieIdToShow(movieIdToShow + 1);
  }
  function combine() {
    toDispatch();
    changeFilm();
  }

  const movie = movies[movieIdToShow];

  if (movie) {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <Card key={movie.id}>
            <Text style={{ fontWeight: "bold" }}>Title: </Text>

            <Text>
              {movie.title}
              {"\n"}
            </Text>
            <Text style={{ fontWeight: "bold" }}>Description:</Text>
            <Text>
              {"\n"}
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
            <TouchableOpacity
              style={styles.buttonContainer}
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                combine();
              }}
            >
              <Text style={styles.text}>I do like</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonContainer}
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                setMovieIdToShow(movieIdToShow + 1);
              }}
            >
              <Text style={styles.text}>I don't like</Text>
            </TouchableOpacity>
          </Card>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => {
              navigation.navigate("Common Movies");
            }}
          >
            <Text style={styles.text}>I'm done</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Loading</Text>
        </View>
      </ScrollView>
    );
  }
}
