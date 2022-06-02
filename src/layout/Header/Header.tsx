import React from 'react';
import CityInput from '../../components/CityInput';
import ImgChanger from '../../components/ImgChanger';
import Timer from '../../components/Timer/Timer';
import { UnsplashProps } from '../../types/Unsplash';
import styles from './Header.module.css';

function Header({ images }: UnsplashProps) {
  return (
    <header className={styles.container}>
      <div className={styles.timerContainer}>
        <ImgChanger images={images} />
        <Timer />
      </div>
      <CityInput />
    </header>
  );
}

export default Header;
