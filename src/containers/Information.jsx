import React, { useRef, useContext, Children } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import AppContext from '../context/AppContext';

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

const Buttons = styled.div`
  margin: 10px 0 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .Information-back {
    margin: 10px 0 0 0;
  }
`;

const Sidebar = styled.div`
  margin: 10px 0 0 0;
`;

const Container = styled.div`
  grid-template-columns: 3fr 1fr;
  grid-gap: 2rem;
  grid-row-gap: 1.5em;
  display: grid;
  margin: 0 0 4em 0;

  h2 {
    margin: 0 0 8px 0;
    padding: 0;
  }

  h3 {
    font-size: 18px;
    margin: 0 0 8px 0;
    padding: 0;
  }

  input {
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #d9d9d9;
    color: rgba(0, 0, 0, 0.75);
    display: inline-block;
    font-feature-settings: 'tnum';
    font-size: 14px;
    height: 32px;
    line-height: 32px;
    list-style: none;
    margin: 0 0 8px 0;
    outline: 0;
    padding: 4px 12px;
    width: 100%;
    box-sizing: border-box;
  }

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

const Information = () => {
  const { state, addToBuyer } = useContext(AppContext);

  const history = useHistory();

  const { cart } = state;

  const form = useRef(null);

  const handleSubmit = () => {
    const formData = new FormData(form.current);

    const buyer = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      apto: formData.get('apto'),
      city: formData.get('city'),
      country: formData.get('country'),
      state: formData.get('state'),
      cp: formData.get('cp'),
      phone: formData.get('phone'),
    };

    addToBuyer(buyer);

    history.push('/checkout/payment');
  };

  return (
    <Container>
      <div>
        <div className="Information-head">
          <h2>Información de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo Electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="apto" name="apto" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <Buttons>
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </Buttons>
      </div>
      <Sidebar>
        <h3>Pedido:</h3>
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
      </Sidebar>
    </Container>
  );
};

export default Information;
