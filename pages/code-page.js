import React, { useEffect } from "react";
import { Text, View, ScrollView, Button, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { selectGame } from "../store/movies/selector";

export default function GameCodeDisplay({ navigation }) {
  const game = useSelector(selectGame);
  console.log("game on code page", game);

  if (game) {
    const codeToJoin = game.code;
    return (
      <View>
        <Text>People can join you by using this code: </Text>
        <Text>{codeToJoin}</Text>
        <Button
          title="Continue"
          onPress={() => navigation.navigate("genres-page")}
        />
      </View>
    );
  }
  {
    return (
      <View>
        <Text>Wait for a moment </Text>
      </View>
    );
  }
}
