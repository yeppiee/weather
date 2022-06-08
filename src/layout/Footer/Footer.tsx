import React from 'react';
import { useAppSelector } from '../../customHooks/redux';
import { getDay } from '../../services/utils';
import { WeatherData } from '../../types/User';
import styles from './Footer.module.css';

type FooterProps = {
  weather: WeatherData | undefined;
};

function Footer({ weather }: FooterProps) {
  const { api } = useAppSelector((state) => state.userSlice);
  const daily = weather?.daily;

  if (!weather) return <div>Loading...</div>;

  return (
    weather && (
      <footer className={styles.container}>
        <div className={styles.current}>
          <img
            src={api === 'OpenWeather'
              ? `http://openweathermap.org/img/wn/${weather.today.icon}@2x.png`
              : `https://www.weatherbit.io/static/img/icons/${weather.today.icon}.png`}
            className={styles.img}
            alt="weather-icon"
          />
          <div className={styles.currentInfo}>
            <span className={styles.today}>today</span>
            <span>{`${weather.today.actualTemp}℃`}</span>
          </div>
        </div>
        <ul className={styles.ul}>
          {daily && daily.map((weekday) => (
            <li key={weekday.dt} className={styles.li}>
              {getDay(weekday.dt)}
              <img
                src={api === 'OpenWeather'
                  ? `http://openweathermap.org/img/wn/${weekday.icon}@2x.png`
                  : `https://www.weatherbit.io/static/img/icons/${weekday.icon}.png`}
                className={styles.img}
                alt="weather-icon"
              />
              {`${weekday.temp}℃`}
            </li>
          ))}
        </ul>
      </footer>
    )
  );
}

export default Footer;
