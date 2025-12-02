import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EEF3FF", // fundo igual ao Registrar
  },

  content: {
    paddingTop: 40,
    alignItems: "center",
    width: "100%",
  },

  welcomeText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 30,
    color: "#000",
  },

  // BOTÃO REGISTRAR GASTOS
  registerButton: {
    backgroundColor: "#3b3dbf",
    paddingVertical: 12,
    width: "85%",
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 20,
  },

  registerText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },

  // BOTÃO SAIR
  logoutButton: {
    borderWidth: 1.5,
    borderColor: "red",
    paddingVertical: 12,
    width: "85%",
    borderRadius: 8,
    alignItems: "center",
  },

  logoutText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});
