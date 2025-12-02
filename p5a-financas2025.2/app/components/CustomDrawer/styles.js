import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#FFF",  // sem azul atrás da logo
    marginBottom: 20,
  },

  logo: {
    width: 90,
    height: 90,
    resizeMode: "contain",
  },

  welcome: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "600",
    color: "#000",   // texto preto, elegante
  },

  menuItem: {
    marginHorizontal: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },

  // 🔵 ITEM ATIVO
  menuItemActive: {
    backgroundColor: "#3b3dbf",
  },

  // ⚪ ITEM INATIVO (SEM BORDA)
  menuItemInactive: {
    backgroundColor: "#FFF",
  },

  // TEXTO ATIVO = BRANCO
  menuTextActive: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  // TEXTO INATIVO = PRETO (não mais azul!)
  menuTextInactive: {
    color: "#000",
    fontSize: 18,
  },

  menuText: {
    fontSize: 18,
  },
});
