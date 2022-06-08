import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css';
import { getAMPM, getDate, getTime } from '../../services/utils';
import { userSlice } from '../../store/reducers/UserSlice';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { useGetWeatherByGeoLocationQuery } from '../../store/reducers/OpenWeatherApi';

function Timer() {
  const { getFreezeDate } = userSlice.actions;
  const { freezeDate, cityGeoLocation, api } = useAppSelector((state) => state.userSlice);
  const { refetch } = useGetWeatherByGeoLocationQuery(
    cityGeoLocation,
    { skip: (cityGeoLocation.lat === 0 && cityGeoLocation.lon === 0) || api === 'WeatherBit' },
  );
  const dispatch = useAppDispatch();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const currentTime = Date.now() / 1000;
    const halfAnHourInSec = 1800;
    if (currentTime > freezeDate + halfAnHourInSec) {
      refetch();
      dispatch(getFreezeDate(currentTime));
    }
    const timeout = setTimeout(() => setDate(new Date()), 1000);
    return () => clearTimeout(timeout);
  }, [dispatch, getFreezeDate, date, freezeDate, refetch]);

  return (
    <div>
      <span className={styles.time}>{getTime(date)}</span>
      <span>{getAMPM(date)}</span>
      <div>
        {getDate(date)}
      </div>
    </div>
  );
}

export default Timer;
