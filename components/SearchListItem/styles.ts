import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 6,
    padding: 10,
    position: "relative",
    height: 100,
    width: "50%",
    marginVertical: 5,
  },
  image: {
    width: 70,
    height: 70,
    position: "absolute",
    bottom: 10,
    right: 10,
    zIndex: -1,
  },
  title: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default styles;
