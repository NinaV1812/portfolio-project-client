import React, { useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { setUpGame } from "../store/movies/action";

export default function StartGamePage({ navigation, route }) {
  //   console.log("genressss", route.params.genre);
  const genresToCompare = route.params.genre;
  const code = Math.floor(Math.random() * 10000);
  const started = true;
  const dispatch = useDispatch();

  const navigator = () => {
    navigation.navigate("ThirdPage", { genre: genresToCompare });
  };

  const toDoDispatch = () => {
    dispatch(setUpGame(code, started));
  };

  const functionCombined = () => {
    toDoDispatch();
    navigator();
  };

  return (
    <View>
      <ScrollView>
        <Text>Hello Nina!</Text>
        <Text>Users:</Text>
        <Text>Your code to join:{code}</Text>
        <Button title="To start game" onPress={() => functionCombined()} />
      </ScrollView>
    </View>
  );
}
