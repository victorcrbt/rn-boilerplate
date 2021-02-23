import React from 'react';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import { signOutRequest } from '@store/modules/auth/actions';

const styles = StyleSheet.create({
  button: {
    margin: 8,
    height: 48,
    backgroundColor: '#7711c8',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

const Signed = () => {
  const dispatch = useDispatch();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => dispatch(signOutRequest())}>
      <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
  );
};

export default Signed;
