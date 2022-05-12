export type OpenWeatherData = {
  coord: {
    lon: number,
    lat: number
  },
  weather: [
    {
      id: number,
      main: string,
      description: string,
      icon: string
    }
  ],
  base: string,
  main: {
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    pressure: number,
    humidity: number
  },
  visibility: number,
  wind: {
    speed: number,
    deg: number
  },
  clouds: {
    all: number
  },
  dt: number,
  sys: {
    type: number,
    id: number,
    message: number,
    country: string,
    sunrise: number,
    sunset: number
  },
  timezone: number,
  id: number,
  name: string,
  cod: number
}

type Weather = {
  description: string,
  icon: string,
  id: number,
  main: string
}

type CurrentWeather = {
  clouds: number,
  dew_point: number,
  dt: number,
  feels_like: number,
  humidity: number,
  pressure: number,
  sunrise: number,
  sunset: number,
  temp: number,
  uvi: number,
  visibility: number,
  weather: Weather[],
  wind_deg: number,
  wind_speed: number
}

export type OpenWeatherGeoResponse = {
  current: CurrentWeather,
  daily: CurrentWeather[],
  lat: number,
  lon: number,
  timezone: string,
  timezone_offset: number
}
