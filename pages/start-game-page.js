import React, { useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Button,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../store/movies/selector";
import { gameCode } from "../store/games/action";
import { styles } from "../styles";

export default function StartGamePage({ navigation, route }) {
  const dispatch = useDispatch();
  const game = useSelector(selectGame);
  const [name, onChangeText] = React.useState("");
  const [codeToJoin, set_codeToJoin] = React.useState("");

  // console.log("name", name);
  // console.log("codeToJoin", codeToJoin);

  function functionDispatch() {
    dispatch(gameCode(codeToJoin, name));
  }
  function functionNavigator() {
    navigation.navigate("Movies to Like", { code: codeToJoin });
  }
  function functionCombined() {
    functionDispatch();
    functionNavigator();
  }
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.text}> Hello! What's your name?</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => onChangeText(text)}
            value={name}
          />
        </View>
        <Text> {"\n"}</Text>

        <Text style={styles.text}>What's your code to join a game?</Text>

        <TextInput
          style={styles.input}
          onChangeText={(text) => set_codeToJoin(text)}
          value={codeToJoin}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => functionCombined()}
        >
          <Text style={styles.appButtonText}>Join</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
