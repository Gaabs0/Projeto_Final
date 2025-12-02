import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";

export default function Perfil() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <Header title="Meu perfil" />

      <View style={styles.content}>
        
        {/* TEXTO PRINCIPAL */}
        <Text style={styles.welcomeText}>Bem vindo de volta</Text>

        {/* BOTÃO REGISTRAR GASTOS */}
        <TouchableOpacity 
          style={styles.registerButton}
          onPress={() => navigation.navigate("Registrar")}
        >
          <Text style={styles.registerText}>Registrar gastos</Text>
        </TouchableOpacity>

        {/* BOTÃO SAIR */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
