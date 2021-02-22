import React, { useContext } from 'react';
import styled from 'styled-components';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';

const MapContainer = styled.div`
  margin: 10px 0 0 0;
`;

const Container = styled.div`
  margin: 0 0 4em 0;
`;

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;

  const address = useGoogleAddress(buyer[0]?.address);

  return (
    <Container>
      <div>
        <h2>{`${buyer[0]?.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu dirección:</span>
        <MapContainer>
          <Map data={address} />
        </MapContainer>
      </div>
    </Container>
  );
};

export default Success;
