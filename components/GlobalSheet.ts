import { StyleSheet } from "react-native";

export const GlobalSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "center",
    // backgroundColor: "#F7DEAE",
  },
  ViewContent: {
    flex: 1,
    gap: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 25,
    color: "#34495e",
    fontWeight: "bold",
  },
});
