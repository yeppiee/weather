import React from 'react';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import styles from './ApiSwitcher.module.css';

function ApiSwitcher() {
  const { api } = useAppSelector((state) => state.userSlice);
  const { changeApi } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeApi(e.target.value));
  };

  return (
    <div className={styles.container}>
      <label htmlFor="OpenWeather" className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="apiSwitcher"
          value="OpenWeather"
          id="OpenWeather"
          onChange={handleChange}
          checked={api === 'OpenWeather'}
        />
        <span className={styles.text}>OpenWeather</span>
      </label>
      <label htmlFor="WeatherBit" className={styles.label}>
        <input
          className={styles.input}
          type="radio"
          name="apiSwitcher"
          value="WeatherBit"
          id="WeatherBit"
          onChange={handleChange}
          checked={api === 'WeatherBit'}
        />
        <span className={styles.text}>WeatherBit</span>
      </label>
    </div>
  );
}

export default ApiSwitcher;
