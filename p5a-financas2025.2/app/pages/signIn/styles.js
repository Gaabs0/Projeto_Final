import styled from "styled-components/native";

export const BackGround = styled.View`
  flex: 1;
  background-color: #F0F4FF;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  align-items: center;
  padding: 20px 0;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 160px;
  margin-bottom: 25px;
`;

export const AreaInput = styled.View`
  width: 90%;
  margin-bottom: 15px;
`;

export const Input = styled.TextInput`
  background-color: #FFF;
  width: 100%;
  font-size: 17px;
  padding: 12px 14px;
  border-radius: 8px;
  color: #121212;
  border-width: 1px;
  border-color: #d9d9d9;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 90%;
  height: 48px;
  border-radius: 8px;
  background-color: #3b3dbf;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
`;

export const SubmitText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #FFF;
`;

export const Link = styled.TouchableOpacity`
  margin-top: 18px;
`;

export const LinkText = styled.Text`
  color: #171717;
  font-size: 14px;
  text-decoration: underline;
`;
