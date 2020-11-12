import "react-native-gesture-handler";
import React, { useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import GameStartPage from "./components/first-page";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./store/rootReducer";
import thunk from "redux-thunk";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DisplayMovies from "./pages/display-movies";
import socketIOClient from "socket.io-client";
import StartGamePage from "./pages/start-game-page";
import GenresPage from "./pages/genres-page";
import CommonMoviesPage from "./pages/common-movies";
import GameCodeDisplay from "./pages/code-page";

const Stack = createStackNavigator();
const store = createStore(combineReducers, applyMiddleware(thunk));

export default function App() {
  useEffect(() => {
    const socket = socketIOClient("ws://192.168.178.11:3000");
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

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="GameStartPage">
          <Stack.Screen
            name="Home"
            component={GameStartPage}
            options={{ title: "Welcome" }}
          />
          <Stack.Screen name="Your game code" component={GameCodeDisplay} />
          <Stack.Screen name="Join" component={StartGamePage} />
          <Stack.Screen name="Genres Page" component={GenresPage} />
          <Stack.Screen name="Movies to Like" component={DisplayMovies} />
          <Stack.Screen name="Common Movies" component={CommonMoviesPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
