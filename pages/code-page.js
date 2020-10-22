import React, { useEffect } from "react";
import { Text, View, ScrollView, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../store/movies/selector";
import { styles } from "../styles";

export default function GameCodeDisplay({ navigation }) {
  const game = useSelector(selectGame);
  console.log("game on code page", game);

  if (game) {
    const codeToJoin = game.code;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>
            People can join you by using this code:
          </Text>
          <Text style={styles.text}>{codeToJoin}</Text>
          <Button
            style={styles.buttonContainer}
            title="Continue"
            onPress={() => navigation.navigate("genres-page")}
          />
        </View>
      </ScrollView>
    );
  }
  {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>Wait for a moment </Text>
        </View>
      </ScrollView>
    );
  }
}
