import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { getWeatherByOpenWeather, getWeatherByWeatherBit } from '../services/utils';
import {
  useGetByCityNameQuery,
  useGetWeatherByGeoLocationQuery,
} from '../store/reducers/OpenWeatherApi';
import { userSlice } from '../store/reducers/UserSlice';
import { useGetWeatherBitQuery } from '../store/reducers/WeatherBitApi';
import { useAppDispatch, useAppSelector } from './redux';

function useWeather() {
  const {
    requestCity, userCity, cityGeoLocation, api,
  } = useAppSelector((state) => state.userSlice);
  const { data: cityInfo, error } = useGetByCityNameQuery(requestCity, { skip: !!requestCity === false || api === 'WeatherBit' });
  const { data: openWeather } = useGetWeatherByGeoLocationQuery(
    cityGeoLocation,
    { skip: (cityGeoLocation.lat === 0 && cityGeoLocation.lon === 0) || api === 'WeatherBit' },
  );
  const { data: weatherBit } = useGetWeatherBitQuery(requestCity, { skip: api === 'OpenWeather' || !!requestCity === false });
  const { changeCity, changeRequestCity, getCityGeoLocation } = userSlice.actions;
  const dispatch = useAppDispatch();

  const weatherData = api === 'OpenWeather'
    ? openWeather && getWeatherByOpenWeather(openWeather)
    : weatherBit && getWeatherByWeatherBit(weatherBit);

  useEffect(() => {
    if (error) toast.error(`City "${requestCity}" not found`);
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
    error,
  ]);

  return weatherData;
}

export default useWeather;
