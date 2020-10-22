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

  // const styles = StyleSheet.create({
  //   scrollView: {
  //     backgroundColor: "skyblue",
  //     marginHorizontal: 20,
  //   },
  //   container: {
  //     flex: 1,
  //     alignItems: "center",
  //     justifyContent: "center",
  //     marginBottom: 15,
  //     marginTop: 20,
  //   },
  //   inputContainer: {
  //     marginBottom: 20,
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //   },
  //   input: {
  //     height: 40,
  //     width: 300,
  //     paddingHorizontal: 5,
  //     backgroundColor: "white",
  //     marginBottom: 5,
  //   },
  //   buttonContainer: {
  //     shadowColor: "#000",
  //     shadowOffset: {
  //       width: 0,
  //       height: 2,
  //     },
  //     backgroundColor: "#3F5EFB",
  //     shadowOpacity: 0.23,
  //     shadowRadius: 2.62,
  //     width: 250,
  //     elevation: 4,
  //     borderRadius: 8,
  //     height: 50,
  //     justifyContent: "center",
  //     alignItems: "center",
  //     paddingHorizontal: 80,
  //   },
  //   text: {
  //     color: "white",
  //     fontSize: 18,
  //     fontWeight: "bold",
  //   },
  // });

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
