import React, { useContext, useState } from 'react';
import { Platform, KeyboardAvoidingView, Alert } from 'react-native';

import { 
  BackGround, 
  Container, 
  Logo, 
  AreaInput, 
  Input, 
  SubmitButton, 
  SubmitText,
  Link,
  LinkText
} from './styles';

import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../../context/auth';

export default function SignIn() {
  const navigation = useNavigation();
  const { signIn } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    if (!email || !password) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    signIn(email, password);
  }

  return (
    <BackGround>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        enabled
        style={{ flex: 1 }}
      >

        <Container>

          {/* LOGO */}
          <Logo source={require('../../../assets/Logo.png')} />

          {/* EMAIL */}
          <AreaInput>
            <Input
              placeholder="Email"
              placeholderTextColor="#999"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </AreaInput>

          {/* SENHA */}
          <AreaInput>
            <Input
              placeholder="Senha"
              placeholderTextColor="#999"
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              value={password}
              onChangeText={setPassword}
            />
          </AreaInput>

          {/* LOGIN */}
          <SubmitButton activeOpacity={0.8} onPress={handleLogin}>
            <SubmitText>Acessar</SubmitText>
          </SubmitButton>

          {/* LINK CRIAR CONTA */}
          <Link onPress={() => navigation.navigate('SignUp')}>
            <LinkText>Criar uma conta gratuita</LinkText>
          </Link>

        </Container>

      </KeyboardAvoidingView>
    </BackGround>
  );
}
