import React, { useEffect, useState } from "react";
import { Button, Text, View, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
// import { useNavigation } from "@react-navigation/native";
import { getGenres } from "../store/genres/action";

import { useSelector, useDispatch } from "react-redux";
import { selectGenres } from "../store/genres/selector";
// import {getGenres} from "../store/genres/action"
import MyBox from "./check-box-group";

export default function GameStartPage({ navigation }) {
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, []);

  const click = (choice) => {
    // console.log();
    // const accountBlockedNot = user.accountBlocked === true ? false : true;
    // dispatch(updateUser(user.id, accountBlockedNot));
  };

  // console.log("genressss", genres)

  return (
    <View>
      <ScrollView>
        <Text>Choose you genre</Text>

        {genres.map((genre) => {
          return <MyBox key={genre.id} title={genre.name} />;
        })}

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="To start game"
          onPress={() => navigation.navigate("SecondPage", { genres: "Rock" })}
        />
      </ScrollView>
    </View>
  );
}