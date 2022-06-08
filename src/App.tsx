import React from 'react';
import { ToastContainer } from 'react-toastify';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Main from './layout/Main';
import useGeoLocation from './customHooks/useGeoLocation';
import useWeather from './customHooks/useWeather';
import { useGetImgQuery } from './store/reducers/UnsplashAPI';
import useImg from './customHooks/useImg';
import Loader from './components/Loader';

function App() {
  useGeoLocation();
  const weatherData = useWeather();
  const { data: images } = useGetImgQuery(
    weatherData?.today.description,
    { refetchOnMountOrArgChange: true, skip: !!weatherData === false },
  );
  useImg(images);

  if (!images) return <Loader />;
  return (
    <div className={styles.container}>
      <Header images={images.results} />
      <Main />
      <Footer weather={weatherData} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
