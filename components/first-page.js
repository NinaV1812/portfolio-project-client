import React, { useEffect } from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import axios from "axios";
import {useSelector,useDispatch} from "react-redux"
import {selectGenres} from "../store/genres/selector"
  import {getGenres} from "../store/genres/action"

export default function GameStartPage() {
  const genres = useSelector(selectGenres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres);
    console.log("genres fn",  getGenres)
  }, []);
  

  console.log("genres", genres)

  return (
    <View>
        <Text>
            Hello
            </Text>
        </View>
  );
}
