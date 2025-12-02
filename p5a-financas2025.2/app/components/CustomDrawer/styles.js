import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  header: {
    width: "100%",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#FFF", 
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
    color: "#000",   
  },

  menuItem: {
    marginHorizontal: 18,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 15,
  },


  menuItemActive: {
    backgroundColor: "#3b3dbf",
  },

  
  menuItemInactive: {
    backgroundColor: "#FFF",
  },

 
  menuTextActive: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
  },

  menuTextInactive: {
    color: "#000",
    fontSize: 18,
  },

  menuText: {
    fontSize: 18,
  },
});
