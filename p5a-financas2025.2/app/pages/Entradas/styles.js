import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
  },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
  },

  card: {
    backgroundColor: "#1ac05e",
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },

  cardLabel: {
    color: "#fff",
    fontSize: 15,
    opacity: 0.9,
  },

  cardValue: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 5,
  },

  sectionTitle: {
    fontSize: 16,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: "bold",
    color: "#000",
  },
});
