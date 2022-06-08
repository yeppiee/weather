import { OpenWeatherGeoResponse } from '../types/OpenWeather';
import { Results } from '../types/Unsplash';
import { WeatherBit } from '../types/WeatherBit';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getTime = (date: Date) => date.toLocaleTimeString();

export const getAMPM = (date: Date) => {
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return ampm;
};

export const getDate = (date: Date) => `${days[date.getDay()]}, ${date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
})}`;

export const getImgUrl = (arrUrl: Results) => arrUrl.map((item) => item.urls.regular);

export const getRandomNum = (arrUrl: Results, imgNum: number): number => {
  const arrLength = arrUrl.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return imgNum === randomNum ? getRandomNum(arrUrl, imgNum) : randomNum;
};

export const getDay = (time: number) => {
  const date = new Date(time * 1000);
  const day = date.getDay();
  return days[day];
};

export const getWeatherByOpenWeather = (weatherData: OpenWeatherGeoResponse) => ({
  today: {
    description: weatherData.current.weather[0].description,
    icon: weatherData.current.weather[0].icon,
    actualTemp: Math.ceil(weatherData.current.temp),
  },
  daily: weatherData?.daily.slice(1, 7).map((weekday) => {
    const { weather, temp, dt } = weekday;
    const newObj = {
      temp: Math.ceil(temp.day),
      icon: weather[0].icon,
      dt,
    };
    return newObj;
  }),
});

export const getWeatherByWeatherBit = (weatherData: WeatherBit) => ({
  today: {
    description: weatherData.data[0].weather.description,
    icon: weatherData.data[0].weather.icon,
    actualTemp: Math.ceil(weatherData.data[0].temp),
  },
  daily: weatherData.data.slice(1, 7).map((weekday) => {
    const { weather, temp, ts } = weekday;
    const newObj = {
      temp: Math.ceil(temp),
      icon: weather.icon,
      dt: +ts,
    };
    return newObj;
  }),
});
