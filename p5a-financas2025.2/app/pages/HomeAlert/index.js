import React from 'react';
import { View, Text, Modal, TouchableOpacity } from 'react-native';
import { styles } from './styles';

export default function HomeAlert({ isVisible, onClose, onConfirm }) {
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.alertBox}>
          <Text style={styles.title}>Atenção</Text>
          <Text style={styles.message}>
            Você tem certeza que deseja deletar esse registro?
          </Text>

          <View style={styles.buttonsRow}>
            <TouchableOpacity style={styles.cancelBtn} onPress={onClose}>
              <Text style={styles.cancelText}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.confirmBtn} onPress={onConfirm}>
              <Text style={styles.confirmText}>Continuar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
