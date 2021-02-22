import React from 'react';
import styled from 'styled-components';

const Title = styled.p``;

const Copy = styled.p``;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Footer = () => (
  <Container>
    <Title>Matthew Merch</Title>
    <Copy>Todos los Derechos Reservados</Copy>
  </Container>
);

export default Footer;
