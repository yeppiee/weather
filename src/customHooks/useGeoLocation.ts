import { useEffect, useState } from 'react';

const useGeoLocation = () => {
  const [location, setLocation] = useState({ lat: 0, lon: 0, isLoad: false });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({ lat: position.coords.latitude, lon: position.coords.longitude, isLoad: true });
    });
  }, []);

  return location.isLoad ? location : null;
};

export default useGeoLocation;
