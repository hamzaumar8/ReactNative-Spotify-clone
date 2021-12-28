import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    margin: 10,
  },
  image: {
    width: 70,
    height: 70,
  },
  rightContainer: {
    justifyContent: "space-around",
    marginLeft: 10,
  },
  title: {
    color: "#fff",
    fontSize: 18,
  },
  artist: {
    color: "lightgrey",
    fontSize: 14,
  },
});

export default styles;
