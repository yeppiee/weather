import React from 'react';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { getRandomNum } from '../../services/utils';
import { userSlice } from '../../store/reducers/UserSlice';
import { UnsplashProps } from '../../types/Unsplash';
import styles from './ImgChanger.module.css';

function ImgChanger({ images }: UnsplashProps) {
  const { imgNum } = useAppSelector((state) => state.userSlice);
  const { changeImgNum } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleClick = () => dispatch(changeImgNum(getRandomNum(images, imgNum)));

  return (
    <div className={styles.container}>
      <button type="button" onClick={handleClick} className={styles.button}>
        <i className="fa-solid fa-rotate" />
      </button>
    </div>
  );
}

export default ImgChanger;
