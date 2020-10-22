import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "skyblue",
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 20,
  },
  inputContainer: {
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    height: 40,
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: "white",
    marginBottom: 5,
  },
  buttonContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    backgroundColor: "#3F5EFB",
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    width: 250,
    elevation: 4,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
