import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = (props) => {
  const { data } = props;

  const containerStyle = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = { ...data };

  return (
    <LoadScript googleMapsApiKey={String(process.env.GOOGLE_MAPS_API_KEY)}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        zoom={8}
        center={defaultCenter}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
