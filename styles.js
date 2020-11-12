import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#036756",
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 20,
    shadowColor: "#000",
  },
  genres_container: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
    marginTop: 20,
    shadowColor: "#000",
    marginBottom: 20,
    marginBottom: 20,
  },
  genres_list: {
    alignItems: "stretch",
  },
  inputContainer: {
    margin: 20,
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
    marginBottom: 5,
    marginTop: 10,
    borderWidth: 4,
    borderColor: "#194D33",
    padding: 8,
    borderRadius: 4,
    color: "white",
    fontSize: 20,
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
    width: 260,
    elevation: 8,
    borderRadius: 8,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 80,
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  code: {
    color: "white",
    fontSize: 30,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
});
