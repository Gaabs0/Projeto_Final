import { View, Text, StyleSheet } from "react-native";

export default function MovList({ type, value }) {
  return (
    <View style={styles.container}>
      <Text
        style={[styles.badge, type === "receita" ? styles.receita : styles.despesa]}
      >
        {type === "receita" ? "↑ receita" : "↓ despesa"}
      </Text>
      <Text style={styles.value}>R$ {value}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eef1f7",
    marginBottom: 12,
    borderRadius: 8,
    padding: 14,
  },
  badge: {
    color: "#fff",
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  receita: {
    backgroundColor: "#0cc977",
  },
  despesa: {
    backgroundColor: "#e54a48",
  },
  value: {
    fontSize: 17,
    fontWeight: "bold",
  }
});
