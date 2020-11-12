import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { setUpGame } from "../store/movies/action";
import { styles } from "../styles";
import AnimatedInput from "react-native-animated-input";

export default function GameStartPage({ navigation }) {
  const dispatch = useDispatch();
  const started = true;
  const [name, onChangeText] = React.useState("My name");
  const navigator = () => {
    navigation.navigate("Your game code");
  };

  const toDoDispatch = () => {
    dispatch(setUpGame(started, name));
  };

  const functionCombined = () => {
    toDoDispatch();
    navigator();
  };
  // Animated.AnimatedInput(useNativeDriver: true);
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            paddingHorizontal: 20,
            marginTop: 10,
            color: "white",
          }}
        >
          <Text style={styles.text}>If you want to start a new game.</Text>
          <AnimatedInput
            style={{ color: "white" }}
            placeholder="Input your name"
            valid={name}
            errorText="Error"
            onChangeText={(name) => onChangeText(name)}
            value={name}
            useNativeDriver={true}
            styleLabel={{ fontWeight: "600", color: "white" }}
            styleBodyContent={{ borderBottomWidth: 1.5, color: "white" }}
          />

          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={() => functionCombined()}
          >
            <Text style={styles.appButtonText}>Start</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.text}>Push if you want to join a game.</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.buttonContainer}
            onPress={() => navigation.navigate("Join")}
          >
            <Text style={styles.appButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
