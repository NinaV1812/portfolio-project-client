import React, { useRef } from "react";
import { Text, View, ActivityIndicator, Image } from "react-native";
import GameStartPage from "./components/first-page"
import {Provider} from "react-redux"
import { applyMiddleware, createStore } from "redux";
import combineReducers from "./store/rootReducer"
import thunk from "redux-thunk"

const store = createStore(combineReducers, applyMiddleware(thunk))

export default function App() {
  const randomNum = useRef(Math.random()).current;

  return (
    <Provider store={store}>
    <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
      <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
        Hello React Native
      </Text>
      <Image
        source={{
          uri: `https://picsum.photos/500/300?random=${randomNum}`
        }}
        style={{ width: "100%", height: 160, marginBottom: 30 }}
      />
      <GameStartPage/>
      <View
        style={{
          borderWidth: 2,
          borderColor: "black",
          padding: 20,
          marginBottom: 30
        }}
      >
        <Text>Hello again!</Text>
      </View>
    </View>
    </Provider>
  );
}
