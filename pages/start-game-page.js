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
// import { setUpGame } from "../store/movies/action";
import { selectGame } from "../store/movies/selector";
// import Input from "../pages/screen-with-input-field";
import { gameCode } from "../store/games/action";
// import { selectMoviesGames } from "../store/games/selector";

export default function StartGamePage({ navigation }) {
  //   console.log("genressss", route.params.genre);
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const [name, onChangeText] = React.useState("");

  // console.log("gamessssss", game);
  // console.log("movieGame", movieGame);

  // console.log("code to join", codeToJoin);
  function functionDispatch() {
    const codeToJoin = game.code;
    dispatch(gameCode(codeToJoin, name));
  }
  function functionNavigator() {
    navigation.navigate("display-movies");
  }
  function functionCombined() {
    functionDispatch();
    functionNavigator();
  }

  if (game) {
    // const codeToJoin = game.code;
    return (
      <View>
        <ScrollView>
          <Text>Hello Nina!</Text>
          {/* <Text>Users:</Text> */}
          <Text>What's your name?</Text>
          <TextInput
            style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
            onChangeText={(text) => onChangeText(text)}
            value={name}
          />
          <Button
            icon={<Icon name="arrow-right" size={15} color="white" />}
            title="Join"
            onPress={() => functionCombined()}
          />
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
