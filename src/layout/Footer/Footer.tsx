import React from 'react';
import { OpenWeatherGeoResponse } from '../../types/OpenWeather';

type FooterProps = {
  weather: OpenWeatherGeoResponse | undefined
}

function Footer({ weather }: FooterProps) {
  return (
    <footer>
      <img src={`http://openweathermap.org/img/wn/${weather?.daily[0].weather[0].icon}@2x.png`} alt="weather-icon" />
    </footer>
  );
}

export default Footer;
