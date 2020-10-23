import React from "react";
import {
  Button,
  Text,
  View,
  ScrollView,
  TextInput,
  StyleSheet,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useDispatch } from "react-redux";
import { setUpGame } from "../store/movies/action";
import { styles } from "../styles";

export default function GameStartPage({ navigation }) {
  const dispatch = useDispatch();
  const started = true;
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
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}>If you want to start a new game.</Text>
          <TextInput
            style={styles.input}
            onChangeText={(name) => onChangeText(name)}
            value={name}
          />

          <Button
            style={styles.buttonContainer}
            title="Start game"
            onPress={() => functionCombined()}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Push if you want to join a game.</Text>
          <Button
            style={styles.buttonContainer}
            title="Join a game "
            onPress={() => navigation.navigate("StartGamePage")}
          />
        </View>
      </View>
    </ScrollView>
  );
}
