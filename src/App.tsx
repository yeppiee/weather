import React from 'react';
import styles from './App.module.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import useGeoLocation from './customHooks/useGeoLocation';
import useOpenWeather from './customHooks/useOpenWeather';
import { useGetImgQuery } from './store/reducers/UnsplashAPI';
import useImg from './customHooks/useImg';

// const WEATHER_BIT_API_KEY = '70c100dd35234454816afc7edc843093';

function App() {
  useGeoLocation();
  const { openWeather, isLoading } = useOpenWeather();
  const { data: images } = useGetImgQuery(openWeather?.daily[0].weather[0].main);
  useImg(images);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className={styles.container}>
      <Header images={images.results} />
      <Main />
      <Footer weather={openWeather} />
    </div>
  );
}

export default App;
