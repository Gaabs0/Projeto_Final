import React, { useState } from 'react';
import { Platform } from 'react-native';
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

export default function SignIn() {

  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {

    // Aqui entraria a verificação de login se existisse AuthContext

    // DIRECIONA PARA HOME APÓS LOGAR
    navigation.replace("HomeDrawer");
  }

  return (
    <BackGround>

      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        
        {/* LOGO */}
        <Logo source={require('../../../assets/Logo.png')} />

        {/* EMAIL */}
        <AreaInput>
          <Input
            placeholder="Email"
            placeholderTextColor="#999"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </AreaInput>

        {/* SENHA */}
        <AreaInput>
          <Input
            placeholder="Senha"
            placeholderTextColor="#999"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </AreaInput>

        {/* BOTÃO ACESSAR */}
        <SubmitButton activeOpacity={0.7} onPress={handleLogin}>
          <SubmitText>Acessar</SubmitText>
        </SubmitButton>

        {/* LINK PARA CADASTRO */}
        <Link onPress={() => navigation.navigate("SignUp")}>
          <LinkText>Criar uma conta gratuita</LinkText>
        </Link>

      </Container>

    </BackGround>
  );
}
