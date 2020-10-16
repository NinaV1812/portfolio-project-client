import "react-native-gesture-handler";
import React, { useEffect, useRef } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import GameStartPage from "./components/first-page";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./store/rootReducer";
import thunk from "redux-thunk";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import ThirdPage from "./pages/third-page";
import MenuBar from "./components/menu-bar";
import socketIOClient from "socket.io-client";
import StartGamePage from "./pages/second-page";

const Stack = createStackNavigator();
const store = createStore(combineReducers, applyMiddleware(thunk));

export default function App() {
  useEffect(() => {
    const socket = socketIOClient("ws://192.168.178.11:3000");
    // console.log("socket", socket);
    socket.on("swipe", (msg) => {
      dispatch();
      console.log("swipe erceved from socket", msg);
    });
    socket.on("connect_failed", function () {
      console.log("Sorry, there seems to be an issue with the connection!");
    });
    socket.on("error", function () {
      console.log("error");
    });
    socket.on("connect", function () {
      console.log("connect");
    });
    socket.on("conecing", function () {
      console.log("connecting");
    });
  }, []);

  const randomNum = useRef(Math.random()).current;

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "pink",
      marginHorizontal: 20,
    },
  });

  return (
    <Provider store={store}>
      <MenuBar />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GameStartPage">
          <Stack.Screen
            name="Home"
            component={GameStartPage}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="StartGamePage" component={StartGamePage} />
          <Stack.Screen name="ThirdPage" component={ThirdPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
