import React, { useEffect, useState } from "react";
import { Button, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { getGenres } from "../store/genres/action";

import { useSelector, useDispatch } from "react-redux";
import { selectGenres } from "../store/genres/selector";
import MyBox from "../components/check-box-group";
import { setUpGame } from "../store/movies/action";
import { updateGenres } from "../store/games/action";
import { selectGame } from "../store/movies/selector";

export default function GenresPage({ navigation }) {
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();
  const [genreList, set_genreList] = useState([]);
  const started = true; /// also, ask if it is okay to that, so all my games are started in DB.
  const game = useSelector(selectGame);

  console.log("gamessssss", game);

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  // console.log("gList", genreList);

  // console.log("genressss", genres);
  if (game) {
    const gameID = game.id;
    // console.log("gameID", gameID);

    const navigator = () => {
      navigation.navigate("display-movies", { genre: genreList });
    };

    const toDoDispatch = () => {
      dispatch(updateGenres(gameID, genreList)); // put or putch thunk in order to add genres to DB and be able to get them
    };

    const functionCombined = () => {
      toDoDispatch();
      navigator();
    };

    return (
      <View>
        <ScrollView>
          <Text>Choose you genre</Text>

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

          {/* <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Go futher"
          onPress={() =>
            navigation.navigate("StartGamePage", { genre: genreList })
          }
        /> */}
          <Button title="Start choosing" onPress={() => functionCombined()} />
        </ScrollView>
      </View>
    );
  }
  return <Text>Loading</Text>;
}
