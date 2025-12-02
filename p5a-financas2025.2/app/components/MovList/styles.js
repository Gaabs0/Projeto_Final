import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f2f5",
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
  },

  /* BADGE */
  badge: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
    marginBottom: 6,
    alignSelf: "flex-start",
  },

  badgeReceita: {
    backgroundColor: "#12a454",
  },

  badgeDespesa: {
    backgroundColor: "#e83f5b",
  },

  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 13,
    marginLeft: 5,
  },

  value: {
    fontSize: 18,
    fontWeight: "bold",
  },

  date: {
    marginTop: 4,
    fontSize: 13,
    color: "#777",
  },
});
