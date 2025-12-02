import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3FF",
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },

  input: {
    backgroundColor: "#FFF",
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  typeButton: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#CCC",
  },

  typeButtonActive: {
    backgroundColor: "#EAF0FF",
    borderColor: "#0B3B91",
  },

  typeText: {
    marginLeft: 6,
    fontSize: 16,
    color: "#000",
  },

  typeTextActive: {
    color: "#0B3B91",
    fontWeight: "bold",
  },

  submitButton: {
    backgroundColor: "#1ABC4A",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },

  submitText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});
