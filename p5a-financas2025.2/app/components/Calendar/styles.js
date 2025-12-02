import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 15,
    marginTop: 10
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  monthTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  weekRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    marginTop: 5,
  },

  weekText: {
    width: `${100 / 7}%`,
    textAlign: "center",
    fontSize: 12,
    color: "#777",
  },

  daysGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },

  dayBox: {
    width: `${100 / 7}%`,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  dayText: {
    fontSize: 14,
    color: "#222",
  },

  selectedDay: {
    backgroundColor: "#DDE6FF",
    borderRadius: 8,
  },

  selectedDayText: {
    fontWeight: "bold",
    color: "#000",
  }
});
