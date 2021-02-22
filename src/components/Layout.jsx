import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Container = styled.div`
  padding: 10px;
  grid-template-columns: minmax(auto, 768px);
  display: grid;
  justify-content: center;
`;

const Layout = (props) => {
  const { children } = props;

  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
