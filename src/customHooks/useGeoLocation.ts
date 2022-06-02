import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux';
import { userSlice } from '../store/reducers/UserSlice';
import { useGetCityByGeoLocationQuery } from '../store/reducers/OpenWeatherApi';

const useGeoLocation = () => {
  const { userGeoLocation } = useAppSelector((state) => state.userSlice);
  const { data } = useGetCityByGeoLocationQuery(userGeoLocation);
  const { getUserGeoLocation, changeUserCity } = userSlice.actions;
  const dispatch = useAppDispatch();
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      if (data) {
        dispatch(changeUserCity(data.name));
      } else {
        dispatch(getUserGeoLocation({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        }));
      }
    });
  }, [changeUserCity, data, dispatch, getUserGeoLocation]);
};

export default useGeoLocation;
