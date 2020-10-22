import React, { useEffect } from "react";
import { Text, View, ScrollView, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectGame, SelectCommonMovies } from "../store/movies/selector";
import { getCommonMovies } from "../store/movies/action";
import { Card } from "react-native-elements";

export default function CommonMoviesPage() {
  // const genres = route.params.genre;
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  // console.log("games on this page", game);
  const commonMovies = useSelector(SelectCommonMovies);

  console.log("common Movies", commonMovies);

  useEffect(() => {
    if (game) {
      dispatch(getCommonMovies(game.id));
    }
  }, []);
  if (commonMovies) {
    return (
      <View>
        <ScrollView>
          <Text>Hey-hey. Movies that you all liked</Text>
          {commonMovies.map((movie) => {
            return (
              <Card key={movie.id}>
                <Text>
                  <Text style={{ fontWeight: "bold" }}>Title: </Text>
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
              </Card>
            );
          })}
        </ScrollView>
      </View>
    );
  }
  return <Text>Not yet</Text>;
}
