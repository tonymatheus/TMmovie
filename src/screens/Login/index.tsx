import React, {useState} from 'react';

import {
  Container,
  ViewForm,
  Header,
  HeaderTitle,
  InputView,
  Input,
  ViewButton,
  ButtonTitle,
  ViewRegister,
  Link,
  LinkTitle,
} from './styles';

export const Login = () => {
  const [login, setLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState();
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');

  const toggleLogin = () => {
    setLogin(!login);
  };

  if (login) {
    return (
      <Container>
        <ViewForm>
          <Header>
            <HeaderTitle style={{color: '#e52246'}}>TM</HeaderTitle>
            <HeaderTitle style={{fontSize: 23}}>Movies</HeaderTitle>
          </Header>
          <InputView>
            <Input
              placeholder="email@email"
              value={email}
              onChangeText={text => setEmail(text)}
            />
            <Input
              placeholder="*******"
              secureTextEntry={true}
              value={password}
              onChange={text => setPassword(text)}
            />
            <ViewButton>
              <ButtonTitle>Login</ButtonTitle>
            </ViewButton>
            <ViewRegister>
              <Link onPress={toggleLogin}>
                <LinkTitle>Ainda não tem uma conta? cadastrar</LinkTitle>
              </Link>
            </ViewRegister>
          </InputView>
        </ViewForm>
      </Container>
    );
  }

  return (
    <Container>
      <ViewForm>
        <Header>
          <HeaderTitle style={{color: '#e52246'}}>Ca</HeaderTitle>
          <HeaderTitle>dastrar</HeaderTitle>
        </Header>
        <InputView>
          <Input
            placeholder="nome"
            value={name}
            onChangeText={text => setName(text)}
          />
          <Input
            placeholder="email@email"
            value={emailRegister}
            onChangeText={text => setEmailRegister(text)}
          />
          <Input
            placeholder="*******"
            secureTextEntry={true}
            value={passwordRegister}
            onChange={text => setPasswordRegister(text)}
          />
          <ViewButton onPress={toggleLogin}>
            <ButtonTitle>Cadastrar</ButtonTitle>
          </ViewButton>
        </InputView>
      </ViewForm>
    </Container>
  );
};