import "react-native-gesture-handler";
import React, { useRef } from "react";
import { Button } from "react-native";
export default function menuBar({ navigation }) {
  return (
    <Button
      title="Helllllo"
      onPress={() => navigation.navigate("SecondPage")}
    ></Button>
  );
}
