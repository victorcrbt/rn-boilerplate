/* eslint-disable no-use-before-define */
import React, { useState, useCallback } from 'react';
import {
  SafeAreaView,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import UsersRepository from '@repositories/UsersRepository';
import useFocusInput from '@hooks/useFocusInput';
import mainRealm from '@database/main';

const SignUp = ({ navigation }) => {
  const [usernameInputRef, focusUsernameInput] = useFocusInput();
  const [passwordInputRef, focusPasswordInput] = useFocusInput();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = useCallback(() => {
    const usersRepository = new UsersRepository(mainRealm);

    try {
      usersRepository.insert({ name, username, password });

      console.log('Usuário cadastrado com sucesso!');

      navigation.navigate('Home');
    } catch (error) {
      if (__DEV__) {
        console.log(error);
      }
    }
  }, [name, username, password, navigation]);

  const handleNavigateToHome = useCallback(() => navigation.navigate('Home'), [
    navigation,
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite seu nome..."
        value={name}
        onChangeText={setName}
        returnKeyType="next"
        onSubmitEditing={focusUsernameInput}
      />
      <TextInput
        ref={usernameInputRef}
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
        onSubmitEditing={handleSignUp}
      />

      <Pressable onPress={handleSignUp} style={styles.signUpButton}>
        <Text style={styles.signUpButtonText}>CADASTRAR</Text>
      </Pressable>

      <Pressable onPress={handleNavigateToHome} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>FAZER LOGIN</Text>
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

  signUpButton: {
    height: 48,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7711c8',
  },

  signUpButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },

  signInButton: {
    height: 48,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#037bfc',
  },

  signInButtonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff',
  },
});

SignUp.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default SignUp;
