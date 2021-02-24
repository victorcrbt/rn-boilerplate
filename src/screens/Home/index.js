/* eslint-disable no-use-before-define */
import React, { useCallback, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  SafeAreaView,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import useFocusInput from '@hooks/useFocusInput';
import { signInRequest } from '@store/modules/auth/actions';

const Home = ({ navigation }) => {
  const dispatch = useDispatch();

  const [passwordInputRef, focusPasswordInput] = useFocusInput();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = useCallback(
    () => dispatch(signInRequest(username, password)),
    [dispatch, username, password]
  );

  const handleNavigateToCreateAccount = useCallback(
    () => navigation.navigate('SignUp'),
    [navigation]
  );

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu username..."
        value={username}
        onChangeText={setUsername}
        returnKeyType="next"
        onSubmitEditing={focusPasswordInput}
      />
      <TextInput
        ref={passwordInputRef}
        style={styles.input}
        placeholder="Digite sua senha..."
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        onSubmitEditing={handleSignIn}
      />

      <Pressable style={styles.signInButton} onPress={handleSignIn}>
        <Text style={styles.signInButtonText}>ENTRAR</Text>
      </Pressable>

      <Pressable
        style={styles.createAccountButton}
        onPress={handleNavigateToCreateAccount}>
        <Text style={styles.createAccountButtonText}>CRIAR CONTA</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },

  input: {
    marginVertical: 8,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#999',
  },

  signInButton: {
    height: 48,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7711c8',
  },

  signInButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },

  createAccountButton: {
    height: 48,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#037bfc',
  },

  createAccountButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

Home.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Home;
