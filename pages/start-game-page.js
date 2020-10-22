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
import { selectGame } from "../store/movies/selector";
import { gameCode } from "../store/games/action";

export default function StartGamePage({ navigation, route }) {
  //   console.log("genressss", route.params.genre);
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const [name, onChangeText] = React.useState("");
  const [codeToJoin, set_codeToJoin] = React.useState("");

  // console.log("gamessssss", game);
  // console.log("movieGame", movieGame);
  console.log("name", name);
  console.log("codeToJoin", codeToJoin);

  // console.log("code to join", codeToJoin);
  function functionDispatch() {
    // const codeToJoin = game.code;
    dispatch(gameCode(codeToJoin, name));
  }
  function functionNavigator() {
    navigation.navigate("display-movies", { code: codeToJoin });
  }
  function functionCombined() {
    functionDispatch();
    functionNavigator();
  }
  return (
    <View>
      <ScrollView>
        <Text>Hello Nina!</Text>
        <Text>What's your name?</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={name}
        />
        <Text> {"\n"}</Text>

        <Text>What's your code to join a game?</Text>

        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => set_codeToJoin(text)}
          value={codeToJoin}
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
