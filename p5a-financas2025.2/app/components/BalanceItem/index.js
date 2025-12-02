<<<<<<< HEAD
import React from 'react';
import { Container, Label, Balance } from './styles.js';

export default function BalanceItem({ title, value, type }) {
  const bg =
    type === 'receita' ? '#12a454' :
    type === 'despesa' ? '#e83f5b' :
    '#4d51e5';
=======
import { Container, Label, Balance } from './styles';

export default function BalanceItem({ title, value, type }) {
  const bg = type === 'receita' ? '12a454' : type === 'despesa' ? 'e83f5b' : '333333';
>>>>>>> 2cf9e680a8bb72945d1adfafb005c11d636b19e1

  return (
    <Container bg={bg}>
      <Label>{title}</Label>
<<<<<<< HEAD
      <Balance>{value}</Balance>
=======
      <Balance>R$ {value}</Balance>
>>>>>>> 2cf9e680a8bb72945d1adfafb005c11d636b19e1
    </Container>
  );
}