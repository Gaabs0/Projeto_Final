import React from "react";
import { View, Text } from "react-native";
import MovList from "../../components/MovList";
import { styles } from "./styles";

export default function Entradas() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>☰ Minhas movimentações</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Entradas de hoje</Text>
        <Text style={styles.cardValue}>R$ 1.200</Text>
      </View>

      <Text style={styles.sectionTitle}>📅 Últimas movimentações</Text>

      <MovList data={{ id: "1", type: "despesa", value: "35.30", label: "Despesa Teste" }} />
      <MovList data={{ id: "2", type: "receita", value: "780.30", label: "Receita Teste" }} />
      <MovList data={{ id: "3", type: "receita", value: "50", label: "Bonus" }} />
      <MovList data={{ id: "4", type: "despesa", value: "155.90", label: "Despesa Teste 2" }} />
    </View>
  );
}
