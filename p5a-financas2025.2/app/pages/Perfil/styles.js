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

  /* CARD */
  card: {
    backgroundColor: "#4d51e5",
    padding: 25,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 25,
  },

  cardName: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },

  cardEmail: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
    marginTop: 4,
  },

  /* LABEL DOS INPUTS */
  label: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },

  /* INPUT */
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

  /* BOTÃO LOGOUT */
  buttonLogout: {
    backgroundColor: "#e64a45",
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },

  buttonLogoutText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },
});
