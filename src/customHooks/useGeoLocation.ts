import { useEffect } from 'react';
import { useAppDispatch } from './redux';
import { userSlice } from '../store/reducers/UserSlice';
import { useLazyGetCityByGeoLocationQuery } from '../store/reducers/OpenWeatherApi';

const useGeoLocation = () => {
  const [getCityByGeoLocation, { data }] = useLazyGetCityByGeoLocationQuery();
  const { changeUserCity } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (!data) {
        getCityByGeoLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
      } else {
        dispatch(changeUserCity(data.name));
      }
    });
  }, [changeUserCity, data, dispatch, getCityByGeoLocation]);
};

export default useGeoLocation;
