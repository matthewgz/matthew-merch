import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import styled from 'styled-components';
import AppContext from '../context/AppContext';

const Alert = styled.div`
  color: #33b13a;
  font-size: 18px;
  margin-left: 5px;
`;

const Checkout = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  justify-items: center;
  width: 30px;
  margin: 0 0 0 0.5em;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: #33b1ff;

    div {
      height: 24px;
    }
  }
`;

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <Container>
      <Link to="/">
        <h1>Matthew Merch</h1>
      </Link>
      <Checkout>
        <Link to="/checkout">
          <div>
            <FaShoppingBasket size={24} />
          </div>
        </Link>
        {cart.length > 0 && <Alert>{cart.length}</Alert>}
      </Checkout>
    </Container>
  );
};

export default Header;
