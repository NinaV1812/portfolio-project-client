import React, { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { CheckBox } from "react-native-elements";
import { useSelector, useDispatch } from "react-redux";
import { selectGenres } from "../store/genres/selector";
import { getGenres } from "../store/genres/action";

export default function GameStartPage(prop) {
  const [checked, set_checked] = useState(false);
  // create an array and pass the names of genres to use state and then .....
  //   const genres = useSelector(selectGenres);
  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(getGenres());
  //   }, []);

  //   console.log("genressss", genres);
  const onPress = (event) => {
    event.preventDefault();
    // const newGenresArray = checked.push()
    set_checked(!checked);
  };

  console.log("checked", checked);

  return (
    <View>
      <CheckBox
        // key={prop.key}
        title={prop.title}
        // checkedIcon='dot-circle-o'
        uncheckedIcon="circle-o"
        checkedColor="blue"
        checked={checked}
        onPress={onPress}
      ></CheckBox>
    </View>
  );
}
