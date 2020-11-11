import React, { useState } from "react";
import { View } from "react-native";
import { CheckBox } from "react-native-elements";

export default function GameStartPage(prop) {
  const [checked, set_checked] = useState(false);

  const onPress = (event) => {
    event.preventDefault();
    prop.onPress();
    set_checked(!checked);
  };

  return (
    <View>
      <CheckBox
        title={prop.title}
        uncheckedIcon="circle-o"
        checkedColor="blue"
        checked={checked}
        onPress={onPress}
      ></CheckBox>
    </View>
  );
}
