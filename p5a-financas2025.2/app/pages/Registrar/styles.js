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

  /* CARD SUPERIOR */
  card: {
    backgroundColor: "#4d51e5",
    padding: 20,
    borderRadius: 12,
    marginBottom: 25,
  },

  cardLabel: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  /* INPUTS */
  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 10,
    marginTop: 8,
    marginBottom: 10,
    fontSize: 15,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  /* TIPO */
  typeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 20,
  },

  typeButton: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: 14,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  typeTextReceita: {
    marginLeft: 10,
    fontSize: 15,
    color: "#12a454",
    fontWeight: "bold",
  },

  typeTextDespesa: {
    marginLeft: 10,
    fontSize: 15,
    color: "#e83f5b",
    fontWeight: "bold",
  },

  /* ACTIVE STATES */
  activeReceita: {
    borderColor: "#12a454",
    backgroundColor: "#e7f9ef",
  },

  activeDespesa: {
    borderColor: "#e83f5b",
    backgroundColor: "#ffe6e8",
  },

  /* BOTÃO SALVAR */
  buttonSave: {
    backgroundColor: "#4d51e5",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  buttonSaveText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
