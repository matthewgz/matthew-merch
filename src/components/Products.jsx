import React, { Children, useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import Product from './Product';

const Container = styled.div`
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;

  const handleAddToCart = (product) => () => {
    addToCart(product);
  };

  return (
    <Container>
      {Children.toArray(
        products.map((product) => (
          <Product product={product} handleAddToCart={handleAddToCart} />
        ))
      )}
    </Container>
  );
};

export default Products;
