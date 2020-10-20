import React, { useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { setUpGame } from "../store/movies/action";
import { selectGame } from "../store/movies/selector";
import Input from "../pages/screen-with-input-field";
import { gameCode } from "../store/games/action";
import { selectMoviesGames } from "../store/games/selector";

export default function StartGamePage({ navigation, route }) {
  //   console.log("genressss", route.params.genre);
  // const genresToCompare = route.params.genre;
  const code = Math.floor(Math.random() * 10000); //it's random code, a code in DB in is differett fetch it from game
  // const started = true; /// also, ask if it is okay to that, so all my games are started in DB.
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const [value, onChangeText] = React.useState("Placeholder");
  const movieGame = useSelector(selectMoviesGames);

  // console.log("gamessssss", game);
  console.log("movieGame", movieGame);

  // console.log("code to join", codeToJoin);

  //// NO IDEA NO IDEA NO IDEA NO IDEA HELP HELP HELP

  //I caLl getMovies with param game.genresID

  if (game) {
    const codeToJoin = game.code;
    return (
      <View>
        <ScrollView>
          <Text>Hello Nina!</Text>
          <Text>Users:</Text>
          <Text>Your code to join:{codeToJoin}</Text>
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="Join"
            onPress={() =>
              navigation.navigate("display-movies", { genre: genresToCompare })
            }
          />
          {/* <Button title="To start game" onPress={() => functionCombined()} /> */}
          <View>
            <Text>hey-hey</Text>
            {/* <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            /> */}
            <Text>What's your name?</Text>
            <TextInput
              style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
              onChangeText={(text) => onChangeText(text)}
              value={value}
            />
            <Button
              icon={<Icon name="arrow-right" size={15} color="white" />}
              title="Join if didn't join"
              onPress={() => dispatch(gameCode(codeToJoin, value))}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
  return (
    <View>
      <Text>Loading</Text>
    </View>
  );
}
