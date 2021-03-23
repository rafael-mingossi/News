import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "100%",
  },
  viewOpacity: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  touchableBtn: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
    padding: 5,
  },
  viewLine: {
    width: 35,
    height: 2,
    backgroundColor: "black",
    position: "absolute",
    left: 35,
    top: 45,
  },
});

export default styles;
