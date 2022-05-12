import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import useGeoLocation from './customHooks/useGeoLocation';
import useOpenWeather from './customHooks/useOpenWeather';

// const WEATHER_BIT_API_KEY = '70c100dd35234454816afc7edc843093';

function App() {
  useGeoLocation();
  const { openWeather, isLoading } = useOpenWeather();
  const [isImgLoad, setIsImgLoad] = useState(false);

  useEffect(() => {
    fetch('https://source.unsplash.com/1366x625/?rain').then(() => {
      setIsImgLoad(true);
    });
  }, [isImgLoad]);

  if (isLoading) return <div>Loading...</div>;
  return (
    <div style={{ backgroundImage: 'url(https://source.unsplash.com/1366x625/?rain)' }} className={styles.container}>
      {isImgLoad
      && (
      <>
        <Header />
        <Main />
        <Footer weather={openWeather} />
      </>
      )}
    </div>
  );
}

export default App;
