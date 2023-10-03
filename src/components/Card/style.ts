import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: 64,
    borderRadius: 8,
    backgroundColor: "#333333",
    alignItems: "center",
    padding: 12,
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#4EA8DE",
  },
  cardTitle: {
    color: "#F2F2F2",
    fontSize: 14,
    width: 255,
    maxHeight: 38,
  },
  delete: {
    width: 20,
    height: 20,
  },
});
