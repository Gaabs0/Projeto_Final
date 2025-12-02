import React from "react";
import { Container, Label, Balance } from "./styles";

export default function BalanceItem({ title, value, type }) {
  
  const bg =
    type === "receita" ? "#12A454" :
    type === "despesa" ? "#E83F5B" :
    "#4D51E5"; 

  return (
    <Container bg={bg}>
      <Label>{title}</Label>
      <Balance>R$ {value}</Balance>
    </Container>
  );
}
