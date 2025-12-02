

      import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { styles } from "./styles";

export default function MovList({ data, onDelete }) {

  const isReceita = data.type === "receita";

  return (
    <TouchableOpacity 
      style={styles.container}
      onLongPress={() => onDelete && onDelete(data.id)}
    >
      <View style={styles.row}>

        {/* BADGE (EM CIMA) */}
        <View>
          <View style={[
            styles.badge,
            isReceita ? styles.badgeReceita : styles.badgeDespesa
          ]}>
            <Icon
              name={isReceita ? "arrow-up" : "arrow-down"}
              size={16}
              color="#fff"
            />
            <Text style={styles.badgeText}>
              {isReceita ? "RECEITA" : "DESPESA"}
            </Text>
          </View>

          {/* VALOR (EMBAIXO) */}
          <Text
            style={[
              styles.value,
              { color: isReceita ? "#12a454" : "#e83f5b" }
            ]}
          >
            R$ {data.value}
          </Text>

          
        </View>

      </View>
    </TouchableOpacity>
  );
}
