import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 15,
  },
  name: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  creatorContainer: {
    flexDirection: "row",
    margin: 10,
  },
  creator: {
    color: "lightgrey",
    margin: 5,
  },
  likes: {
    color: "lightgrey",
    margin: 5,
  },
  button: {
    backgroundColor: "#1cd05d",
    paddingHorizontal: 50,
    paddingVertical: 10,
    marginVertical: 5,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "lightgrey",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
