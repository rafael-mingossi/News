import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "black",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
    width: "50%",
  },
  viewOpacity: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
});

export default styles;
