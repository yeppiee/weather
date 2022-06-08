export type UserGeoLocation = {
  lat: number;
  lon: number;
}

type WeatherDataDaily = {
  temp: number,
  icon: string,
  dt: number
}

export type WeatherData = {
  today: {
    description?: string,
    icon?: string,
    actualTemp: number,
  },
  daily?: WeatherDataDaily[],
}
