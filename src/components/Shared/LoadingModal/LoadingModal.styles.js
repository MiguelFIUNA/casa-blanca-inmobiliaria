import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  overlay: {
    height: 100,
    width: "60%",
    backgroundColor: "rgba(255,255,255,0.9)",
    borderColor: "#000",
    borderRadius: 1,
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 15,
    marginTop: 10,
  },
});
