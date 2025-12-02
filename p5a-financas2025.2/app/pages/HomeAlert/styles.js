import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  alertBox: {
    width: 300,
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10
  },

  message: {
    fontSize: 15,
    marginBottom: 20
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  cancelBtn: {
    padding: 10,
    marginRight: 15
  },

  cancelText: {
    color: 'gray',
    fontWeight: 'bold'
  },

  confirmBtn: {
    padding: 10
  },

  confirmText: {
    color: 'red',
    fontWeight: 'bold'
  }
});
