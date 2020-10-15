import "react-native-gesture-handler";
import React, { useRef } from "react";
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
import SecondPage from "./pages/second-page";
import MenuBar from "./components/menu-bar";

const Stack = createStackNavigator();
const store = createStore(combineReducers, applyMiddleware(thunk));

export default function App() {
  const randomNum = useRef(Math.random()).current;

  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: "pink",
      marginHorizontal: 20,
    },
  });

  return (
    <NavigationContainer>
      <ScrollView style={styles.scrollView}>
        <Provider store={store}>
          <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
            <Text
              style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}
            >
              Hello React Native
            </Text>
            <Image
              source={{
                uri: `https://picsum.photos/500/300?random=${randomNum}`,
              }}
              style={{ width: "100%", height: 160, marginBottom: 30 }}
            />
            <Stack.Navigator>
              <Stack.Screen
                name="Home"
                component={GameStartPage}
                options={{ title: "Welcome" }}
              />
              <Stack.Screen name="SecondPage" component={SecondPage} />
            </Stack.Navigator>
            {/* <GameStartPage /> */}
            <MenuBar />
          </View>
        </Provider>
      </ScrollView>
    </NavigationContainer>
  );
}
