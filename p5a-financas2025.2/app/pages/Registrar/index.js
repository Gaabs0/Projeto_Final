import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";

export default function Registrar() {
  const [type, setType] = useState("receita");

  return (
    <View style={styles.container}>
      
      <Text style={styles.header}>☰ Registrar movimentação</Text>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardLabel}>Nova movimentação</Text>
      </View>

      {/* INPUT NOME */}
      <Text style={styles.label}>Descrição</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: Salário, mercado, venda..."
        placeholderTextColor="#999"
      />

      {/* INPUT VALOR */}
      <Text style={styles.label}>Valor</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 150.00"
        placeholderTextColor="#999"
        keyboardType="numeric"
      />

      {/* SELECT TIPO */}
      <Text style={styles.label}>Tipo</Text>

      <View style={styles.typeContainer}>
        {/* RECEITA */}
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "receita" && styles.activeReceita,
          ]}
          onPress={() => setType("receita")}
        >
          <Icon name="arrow-up" size={20} color="#12a454" />
          <Text style={styles.typeTextReceita}>Receita</Text>
        </TouchableOpacity>

        {/* DESPESA */}
        <TouchableOpacity
          style={[
            styles.typeButton,
            type === "despesa" && styles.activeDespesa,
          ]}
          onPress={() => setType("despesa")}
        >
          <Icon name="arrow-down" size={20} color="#e83f5b" />
          <Text style={styles.typeTextDespesa}>Despesa</Text>
        </TouchableOpacity>
      </View>

      {/* BOTÃO SALVAR */}
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}
