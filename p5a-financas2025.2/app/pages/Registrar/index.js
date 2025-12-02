import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Header from "../../components/Header";
import { styles } from "./styles";

export default function Registrar() {
  const [type, setType] = useState("receita");

  return (
    <View style={styles.container}>
      
      {/* HEADER */}
      <Header title="Registrando" />

      <View style={styles.content}>
        <Text style={styles.title}>Registrar</Text>

        {/* INPUT NOME */}
        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#999"
        />

        {/* INPUT VALOR */}
        <TextInput
          style={styles.input}
          placeholder="Valor desejado"
          placeholderTextColor="#999"
          keyboardType="numeric"
        />

        {/* BOTÕES RECEITA / DESPESA */}
        <View style={styles.typeContainer}>

          <TouchableOpacity
            style={[
              styles.typeButton,
              type === "receita" && styles.typeButtonActive
            ]}
            onPress={() => setType("receita")}
          >
            <Icon
              name="arrow-up"
              size={18}
              color={type === "receita" ? "#0B3B91" : "#000"}
            />
            <Text
              style={[
                styles.typeText,
                type === "receita" && styles.typeTextActive
              ]}
            >
              Receita
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.typeButton,
              type === "despesa" && styles.typeButtonActive
            ]}
            onPress={() => setType("despesa")}
          >
            <Icon
              name="arrow-down"
              size={18}
              color={type === "despesa" ? "#0B3B91" : "#000"}
            />
            <Text
              style={[
                styles.typeText,
                type === "despesa" && styles.typeTextActive
              ]}
            >
              Despesa
            </Text>
          </TouchableOpacity>

        </View>

        {/* BOTÃO REGISTRAR */}
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>Registrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}
