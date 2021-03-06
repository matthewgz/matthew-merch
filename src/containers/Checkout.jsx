import React, { Children, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { MdDeleteForever } from 'react-icons/md';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import getSumTotal from '../utils/getSumTotal';

const Sidebar = styled.div`
  button {
    box-shadow: inset 0px 1px 0px 0px #bee2f9;
    background: linear-gradient(to bottom, #63b8ee 5%, #468ccf 100%);
    background-color: #63b8ee;
    border-radius: 6px;
    border: 1px solid #3866a3;
    display: inline-block;
    cursor: pointer;
    color: #14396a;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px 1px 0px #7cacde;
    width: 100%;
    display: block;
    outline: none;
  }
`;

const Element = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid #eee;

  h4 {
    margin: 0;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0 0 0;

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  .fas {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  padding: 0 0 4em 0;
`;

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, i) => () => {
    removeFromCart(product, i);
  };

  return (
    <>
      <Helmet>
        <title>Lista de pedidos - Matthew Merch</title>
      </Helmet>
      <Container>
        <div>
          {cart.length > 0 ? (
            <h3>Lista de Pedidos:</h3>
          ) : (
            <h3>Sin pedidos...</h3>
          )}

          {Children.toArray(
            cart.map((item, i) => (
              <Item>
                <Element>
                  <h4>{item.title}</h4>
                  <span>$ {item.price}</span>
                </Element>
                <button type="button" onClick={handleRemove(item, i)}>
                  <MdDeleteForever className="fas" size={24} />
                </button>
              </Item>
            ))
          )}
        </div>
        {cart.length > 0 && (
          <Sidebar>
            <h3>Precio Total: $ {getSumTotal(cart)}</h3>
            <Link to="/checkout/information">
              <button type="button"> Continuar pedido </button>
            </Link>
          </Sidebar>
        )}
      </Container>
    </>
  );
};

export default Checkout;
