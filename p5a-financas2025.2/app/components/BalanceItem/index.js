import React from 'react';
import { Container, Label, Balance } from './styles.js';

export default function BalanceItem({ title, value, type }) {
  const bg =
    type === 'receita' ? '#12a454' :
    type === 'despesa' ? '#e83f5b' :
    '#4d51e5';

  return (
    <Container bg={bg}>
      <Label>{title}</Label>
      <Balance>{value}</Balance>
    </Container>
  );
}
