import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${String(
    process.env.GOOGLE_MAPS_API_KEY
  )}`;

  useEffect(async () => {
    const res = await axios(API);
    setMap(res.data.results[0]?.geometry?.location);
  }, []);

  return map;
};

export default useGoogleAddress;
