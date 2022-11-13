import styled from 'styled-components/native';

interface Props {
  size: number;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 4px 0;
  background-color: #191a30;
`;

export const ViewForm = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;
export const Header = styled.View`
  flex-direction: row;
`;
export const HeaderTitle = styled.Text<Props>`
  color: #fff;
  font-weight: bold;
  font-size: 30px;
  margin-right: 1px;
`;
export const InputView = styled.KeyboardAvoidingView`
  width: 90%;
  height: 290px;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.TextInput`
  width: 100%;
  height: 55px;
  padding: 10px;
  margin: 5px;
  background-color: #ffff;
  border-radius: 10px;
  font-weight: 300;
  font-size: 16px;
  color: #000;
`;

export const ViewRegister = styled.View`
  margin-top: 10px;
`;

export const Link = styled.TouchableOpacity``;

export const LinkTitle = styled.Text`
  color: #fff;
  font-weight: 200;
`;
