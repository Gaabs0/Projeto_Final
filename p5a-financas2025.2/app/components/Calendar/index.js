import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(8); // Setembro = mês 8 (0-based)
  const [currentYear, setCurrentYear] = useState(2021);
  const [selectedDay, setSelectedDay] = useState(14);


  const months = [
    "Janeiro","Fevereiro","Março","Abril","Maio","Junho",
    "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"
  ];

  const getCalendarDays = () => {
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    let daysArray = [];

   
    for (let i = 0; i < firstDay; i++) {
      daysArray.push({ day: "", disabled: true });
    }

   
    for (let i = 1; i <= lastDay; i++) {
      daysArray.push({ day: i, disabled: false });
    }

    return daysArray;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          onPress={() => setCurrentMonth(prev => prev - 1)}
        >
          <Icon name="chevron-left" size={20} color="#000" />
        </TouchableOpacity>

        <Text style={styles.monthTitle}>
          {months[currentMonth]} {currentYear}
        </Text>

        <TouchableOpacity 
          onPress={() => setCurrentMonth(prev => prev + 1)}
        >
          <Icon name="chevron-right" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.weekRow}>
        {["DO", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"].map((d) => (
          <Text key={d} style={styles.weekText}>{d}</Text>
        ))}
      </View>
      
      <View style={styles.daysGrid}>
        {getCalendarDays().map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.dayBox,
              item.day === selectedDay && !item.disabled && styles.selectedDay
            ]}
            disabled={item.disabled}
            onPress={() => setSelectedDay(item.day)}
          >
            <Text style={[
              styles.dayText,
              item.disabled && { color: "#CCC" },
              item.day === selectedDay && styles.selectedDayText
            ]}>
              {item.day}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
