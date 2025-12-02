<<<<<<< HEAD
import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";

export default function Header({ title }) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity 
        style={styles.menuButton}
        onPress={() => navigation.openDrawer()}
      >
        <Icon name="menu" size={28} color="#000" />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
=======
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import { Container, ButtonMenu, Title } from './styles.js';

export default function Header({ title }) {
    const navigation = useNavigation();

    return (
        <Container>
            <ButtonMenu onPress={() => navigation.toggleDrawer()}>
                <Icon name="menu" size={30} />
            </ButtonMenu>

            {title && (
                <Title>{title}</Title>
            )}
        </Container>
    );
}
>>>>>>> 2cf9e680a8bb72945d1adfafb005c11d636b19e1
