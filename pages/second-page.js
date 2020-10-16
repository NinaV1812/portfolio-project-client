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

export default function StartGamePage() {
  const code = Math.floor(Math.random() * 10000);
  const started = true;
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();

    console.log("I am trying");
  }
  return (
    <View>
      <ScrollView>
        <Text>Hello Nina!</Text>
        <Text>Users:</Text>
        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="To start game"
          onPress={() => dispatch(setUpGame(code, started))}
        />
      </ScrollView>
    </View>
  );
}
