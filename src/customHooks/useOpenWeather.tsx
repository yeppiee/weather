import { useEffect } from 'react';
import {
  useGetByCityNameQuery,
  useGetWeatherByGeoLocationQuery,
} from '../store/reducers/OpenWeatherApi';
import { userSlice } from '../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from './redux';

function useOpenWeather() {
  const { requestCity, userCity, cityGeoLocation } = useAppSelector((state) => state.userSlice);
  const { data: cityInfo } = useGetByCityNameQuery(requestCity, { skip: !!requestCity === false });
  const { data: openWeather } = useGetWeatherByGeoLocationQuery(
    cityGeoLocation,
    { skip: cityGeoLocation.lat === 0 && cityGeoLocation.lon === 0 },
  );
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
    userCity]);

  return { openWeather };
}

export default useOpenWeather;
