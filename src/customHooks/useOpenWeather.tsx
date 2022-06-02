import { useEffect } from 'react';
import { useGetByCityNameQuery, useGetWeatherByGeoLocationQuery } from '../store/reducers/OpenWeatherApi';
import { userSlice } from '../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './redux';

function useOpenWeather() {
  const { requestCity, cityGeoLocation, userCity } = useAppSelector((state) => state.userSlice);
  const { data: cityInfo } = useGetByCityNameQuery(requestCity);
  const { data: openWeather, isLoading } = useGetWeatherByGeoLocationQuery(cityGeoLocation);
  const { changeCity, changeRequestCity, getCityGeoLocation } = userSlice.actions;
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!requestCity) {
      dispatch(changeRequestCity(userCity));
      dispatch(changeCity(userCity));
    } else {
      dispatch(changeCity(requestCity));
    }
    if (cityInfo) dispatch(getCityGeoLocation(cityInfo.coord));
  }, [
    changeCity,
    changeRequestCity,
    cityInfo,
    dispatch,
    getCityGeoLocation,
    requestCity,
    userCity,
  ]);

  return { openWeather, isLoading };
}

export default useOpenWeather;
