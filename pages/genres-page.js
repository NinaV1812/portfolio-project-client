import React, { useEffect, useState } from "react";
import { Button, Text, View, ScrollView, TouchableOpacity } from "react-native";
import { getGenres } from "../store/genres/action";
import { useSelector, useDispatch } from "react-redux";
import { selectGenres } from "../store/genres/selector";
import MyBox from "../components/check-box-group";
import { updateGenres } from "../store/games/action";
import { selectGame } from "../store/movies/selector";
import { styles } from "../styles";

export default function GenresPage({ navigation }) {
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  const [genreList, set_genreList] = useState([]);
  const game = useSelector(selectGame);

  console.log("gamessssss", game);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  if (game) {
    const gameID = game.id;

    const navigator = () => {
      navigation.navigate("Movies to Like", { genre: genreList });
    };

    const toDoDispatch = () => {
      dispatch(updateGenres(gameID, genreList)); // put or putch thunk in order to add genres to DB and be able to get them
    };

    const functionCombined = () => {
      toDoDispatch();
      navigator();
    };

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.genres_container}>
          <Text style={styles.text}>Choose you genre</Text>
          <View style={styles.genres_list}>
            {genres.map((genre) => {
              return (
                <MyBox
                  key={genre.id}
                  title={genre.name}
                  onPress={() => {
                    set_genreList([...genreList, genre.id]);
                  }}
                />
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => functionCombined()}
          >
            <Text style={styles.appButtonText}>Start</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.text}> Loading</Text>
      </View>
    </ScrollView>
  );
}
