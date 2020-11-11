import React, { useEffect } from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { selectGame } from "../store/movies/selector";
import { styles } from "../styles";

export default function GameCodeDisplay({ navigation }) {
  const game = useSelector(selectGame);

  if (game) {
    const codeToJoin = game.code;
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.text}>
            People can join you by using this code:
          </Text>
          <Text style={styles.code}>{codeToJoin}</Text>
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Genres Page")}
          >
            <Text style={styles.appButtonText}>Continue</Text>
          </TouchableOpacity>
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
