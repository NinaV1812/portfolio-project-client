import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Button } from "react-native";
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

  // console.log("gamesssssss", game);

  // console.log("game movies", movies);

  useEffect(() => {
    dispatch(getGame(gameCode));
  }, []);

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
            <Button
              style={styles.buttonContainer}
              title="I do like"
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                combine();
              }}
            ></Button>
            <Button
              style={styles.buttonContainer}
              title="I don't like"
              contentContainerStyle={styles.buttonContant}
              onPress={() => {
                setMovieIdToShow(movieIdToShow + 1);
              }}
            ></Button>
          </Card>
          <Button
            style={styles.buttonContainer}
            title="I'm done"
            onPress={() => {
              navigation.navigate("common-movies");
            }}
          ></Button>
        </View>
      </ScrollView>
    );
  }
  {
    return <Text>Loading</Text>;
  }
}
