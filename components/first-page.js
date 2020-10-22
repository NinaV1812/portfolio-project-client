import React from "react";
import { Button, Text, View, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { setUpGame } from "../store/movies/action";

export default function GameStartPage({ navigation }) {
  const dispatch = useDispatch();
  const started = true; /// also, ask if it is okay to that, so all my games are started in DB.
  const [name, onChangeText] = React.useState("My name");

  console.log("name", name);
  const navigator = () => {
    navigation.navigate("Your game code");
  };

  const toDoDispatch = () => {
    dispatch(setUpGame(started, name));
  };

  const functionCombined = () => {
    toDoDispatch();
    navigator();
  };

  return (
    <View>
      <ScrollView>
        <Text>If you want to start a new game.</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(name) => onChangeText(name)}
          value={name}
        />

        <Button title="Start game" onPress={() => functionCombined()} />

        <Text>Push if you want to join a game.</Text>

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Join a game "
          onPress={() => navigation.navigate("StartGamePage")}
        />
      </ScrollView>
    </View>
  );
}
