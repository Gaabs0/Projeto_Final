import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";

export default function Perfil() {
  const [nome, setNome] = useState("Carlos Gabriel");
  const [email, setEmail] = useState("carlos@email.com");

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <Text style={styles.header}>☰ Meu Perfil</Text>

      {/* CARD SUPERIOR */}
      <View style={styles.card}>
        <Icon name="user" size={40} color="#fff" />
        <Text style={styles.cardName}>{nome}</Text>
        <Text style={styles.cardEmail}>{email}</Text>
      </View>

      {/* FORMULÁRIO */}
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />

      <Text style={styles.label}>E-mail</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* BOTÃO SALVAR */}
      <TouchableOpacity style={styles.buttonSave}>
        <Text style={styles.buttonSaveText}>Salvar alterações</Text>
      </TouchableOpacity>

      {/* BOTÃO SAIR */}
      <TouchableOpacity style={styles.buttonLogout}>
        <Text style={styles.buttonLogoutText}>Sair</Text>
      </TouchableOpacity>

    </View>
  );
}
