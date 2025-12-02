import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 15px;
  background-color: ${props => props.bg};
`;

export const Label = styled.Text`
  color: #FFF;
  font-size: 16px;
  font-weight: bold;
`;

export const Balance = styled.Text`
  color: #FFF;
  margin-top: 5px;
  font-size: 22px;
  font-weight: bold;
`;
