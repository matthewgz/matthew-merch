import React, { useContext, Children } from 'react';
import { PayPalButton } from 'react-paypal-button';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import getSumTotal from '../utils/getSumTotal';

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

  .fas {
    margin: 0 0 0 10px;
    color: rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
`;

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const history = useHistory();

  const paypalOptions = {
    clientId: String(process.env.CLIENT_ID_PP),
    intent: 'capture',
    currency: 'USD',
  };

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        products: cart,
        payment: data,
      };

      addNewOrder(newOrder);

      history.push('/checkout/success');
    }
  };

  return (
    <Container>
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {Children.toArray(
          cart.map((item) => (
            <Item>
              <Element>
                <h4>{item.title}</h4>
                <span>$ {item.price}</span>
              </Element>
            </Item>
          ))
        )}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={getSumTotal(cart)}
            onPaymentStart={() => {
              console.log('Start Payment');
            }}
            onPaymentSuccess={handlePaymentSuccess}
            onPaymentError={(error) => {
              console.log(error);
            }}
            onPaymentCancel={(data) => {
              console.log(data);
            }}
          />
        </div>
      </div>
      <div />
    </Container>
  );
};

export default Payment;
