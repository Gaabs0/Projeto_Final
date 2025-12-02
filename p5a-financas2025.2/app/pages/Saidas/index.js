import React from "react";
import { View, Text } from "react-native";
import MovList from "../../components/MovList";
import { styles } from "./styles";

export default function Saidas() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>☰ Minhas movimentações</Text>

      <View style={styles.card}>
        <Text style={styles.cardLabel}>Saídas de hoje</Text>
        <Text style={styles.cardValue}>R$ 500</Text>
      </View>

      <Text style={styles.sectionTitle}>📅 Últimas movimentações</Text>

      <MovList data={{ label: "Despesa Teste", type: "despesa", value: "35.30" }} />
      <MovList data={{ label: "Receita Teste", type: "receita", value: "780.30" }} />
      <MovList data={{ label: "Bonus", type: "receita", value: "50" }} />
      <MovList data={{ label: "Despesa Teste 2", type: "despesa", value: "155.90" }} />
    </View>
  );
}
