import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { styles } from "./styles";

export default function CustomDrawer(props) {
  
  const currentRouteIndex = props.state.index;

  const menuItems = [
    { name: "Home", route: "Home" },
    { name: "Registrar", route: "Registrar" },
    { name: "Perfil", route: "Perfil" },
  ];

  return (
    <DrawerContentScrollView {...props}>

     
      <View style={styles.header}>
        <Image 
          source={require("../../../assets/Logo.png")} 
          style={styles.logo}
        />

        <Text style={styles.welcome}>Bem-vindo!</Text>
      </View>

    
      {menuItems.map((item, index) => {
        const isActive = index === currentRouteIndex;

        return (
          <TouchableOpacity
            key={item.name}
            style={[
              styles.menuItem,
              isActive ? styles.menuItemActive : styles.menuItemInactive
            ]}
            onPress={() => props.navigation.navigate(item.route)}
          >
            <Text
              style={[
                styles.menuText,
                isActive ? styles.menuTextActive : styles.menuTextInactive
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        );
      })}

    </DrawerContentScrollView>
  );
}
