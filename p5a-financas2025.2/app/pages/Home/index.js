import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from "react-native-vector-icons/Feather";
import Toast from "react-native-toast-message";


// COMPONENTES
import Header from '../../components/Header/index.js';
import BalanceItem from '../../components/BalanceItem/index.js';
import MovList from '../../components/MovList/index.js';
import HomeAlert from '../HomeAlert/index.js';

// STYLES
import { styles } from './styles';

// LISTA FALSA
const INITIAL_MOVEMENTS = [
  { id: '1', label: 'Despesa', value: '35.30', type: 'despesa' },
  { id: '2', label: 'Receita', value: '780.30', type: 'receita' },
  { id: '3', label: 'Receita', value: '50', type: 'receita' },
  { id: '4', label: 'Despesa', value: '155.90', type: 'despesa' },
];

export default function Home() {
  const navigation = useNavigation();

  const [movements, setMovements] = useState(INITIAL_MOVEMENTS);
  const [isAlertVisible, setAlertVisible] = useState(false);
  const [selectedMovementId, setSelectedMovementId] = useState(null);

  // QUANDO O USUÁRIO SEGURA UM ITEM
  const handleLongPressMovement = (id) => {
  Toast.show({
    type: "info",
    text1: "Atenção",
    text2: "Você tem certeza que deseja deletar esse item?",
    position: "top",
    visibilityTime: 2500,
  });

  // ainda abre o modal para confirmar
  setSelectedMovementId(id);
  setAlertVisible(true);
};


  // DELETAR ITEM
  const handleDeleteMovement = () => {
    setMovements(prev => prev.filter(item => item.id !== selectedMovementId));
    setAlertVisible(false);
  };

  return (
    <View style={styles.container}>
      
      <Header title="Minhas movimentações" />

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>

        {/* CARDS: SALDO, ENTRADA E SAÍDA */}
        <View style={styles.rowCards}>

          <View style={styles.cardItem}>
            <BalanceItem 
              title="Saldo atual" 
              value="1.314,70" 
              type="balance" 
            />
          </View>

          <View style={styles.cardItem}>
            <BalanceItem 
              title="Entradas" 
              value="1.200,00" 
              type="receita" 
            />
          </View>

          <View style={styles.cardItem}>
            <BalanceItem 
              title="Saídas" 
              value="500,00" 
              type="despesa" 
            />
          </View>

        </View>

        {/* TÍTULO COM ÍCONE */}
        <View style={styles.sectionWrapper}>
          <Icon name="calendar" size={20} color="#000" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Últimas movimentações</Text>
        </View>

        {/* LISTA */}
        {movements.map(item => (
          <MovList 
            key={item.id}
            data={item}
            onDelete={() => handleLongPressMovement(item.id)}
          />
        ))}

        {/* BOTÃO FILTRAR */}
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterButtonText}>Filtrar</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* ALERTA DE DELETAR */}
      <HomeAlert 
        isVisible={isAlertVisible}
        onClose={() => setAlertVisible(false)}
        onConfirm={handleDeleteMovement}
      />

    </View>
  );
}
