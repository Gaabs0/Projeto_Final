import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    paddingHorizontal: 20,
    marginTop: 10,
  },

  // ---------- CARDS ----------
  rowCards: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },

  cardItem: {
    flex: 1,
    marginHorizontal: 5,
  },

  // ---------- TÍTULO DA SEÇÃO ----------
  sectionWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  sectionIcon: {
    marginRight: 8,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },

  // ---------- FILTRAR ----------
  filterButton: {
    marginTop: 20,
    marginBottom: 25,
    backgroundColor: "#3b3dbf",
    padding: 12,
    borderRadius: 8,
  },

  filterButtonText: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "bold",
  },
});
