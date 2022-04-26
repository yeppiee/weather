import { useEffect } from 'react';
import useGeoLocation from './useGeoLocation';

const OPENWEATHER_API_KEY = '4d466002d1f5611fd08f865f84a5f135';

const BASE_OPENWEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather?';

const useUserLocation = () => {
  const location = useGeoLocation();

  useEffect(() => {
    console.log('useUserLocation');
    if (location) {
      const userLocation = localStorage.getItem('userLocation');
      if (!userLocation) {
        const { lat, lon } = location;
        fetch(`${BASE_OPENWEATHER_URL}lat=${lat}&lon=${lon}&appid=${OPENWEATHER_API_KEY}`)
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem(data.name, JSON.stringify(data));
            localStorage.setItem('City', data.name);
            localStorage.setItem('userLocation', data.name);
            // setCity(data.name);
          })
          .catch((e) => new Error(e));
      }
    }
  }, [location]);
};

export default useUserLocation;
