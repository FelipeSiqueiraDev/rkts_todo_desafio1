import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  header: {
    height: 173,
    backgroundColor: "#0D0D0D",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  titleContainter: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 12,
  },
  logo: {
    marginRight: 11,
  },
  titleOne: {
    color: "#4EA8DE",
    fontSize: 36,
    fontWeight: "bold",
  },
  titleTwo: {
    color: "#5E60CE",
    fontSize: 36,
    fontWeight: "bold",
  },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    gap: 4,
    position: "absolute",
    top: 143,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#262626",
    color: "#F2F2F2",
    padding: 16,
    fontSize: 16,
    borderRadius: 6,    
    borderWidth: 1,
    borderColor: "#0D0D0D",
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  icon: {
    width: 16,
    height: 16,
  },
  body: {
    flex: 1,
    marginTop: 32,
    padding: 24,
  },
  listStatus: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  createdContainer: {
    flexDirection: "row",
  },
  created: {
    fontSize: 14,
    color: "#4EA8DE",
    fontWeight: "bold",
  },
  createdQtd: {
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    color: "#F2F2F2",
    borderRadius: 12,
    textAlign: "center",
    marginLeft: 8,
  },
  completedContainer: {
    flexDirection: "row",
  },
  completed: {
    fontSize: 14,
    color: "#8284FA",
    fontWeight: "bold",
  },
  completedQtd: {
    width: 25,
    height: 19,
    backgroundColor: "#333333",
    color: "#F2F2F2",
    borderRadius: 12,
    textAlign: "center",
    marginLeft: 8,
  },
  separator: {
    backgroundColor: "#333333",
    width: "100%",
    height: 1,
    marginTop: 20,
    marginBottom: 20,
  },
});
