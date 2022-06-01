import React from 'react';
import Timer from '../../components/Timer';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { getRandomNum } from '../../services/utils';
import { userSlice } from '../../store/reducers/UserSlice';
import { Results } from '../../types/Unsplash';
import styles from './Header.module.css';

type Props = {
  images: Results;
}

function Header({ images }: Props) {
  const { city } = useAppSelector((state) => state.userReducer);
  const { changeCity, changeRequestCity, changeImgNum } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeCity(e.target.value));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(changeRequestCity(city));
  };

  const handleClick = () => dispatch(changeImgNum(getRandomNum(images)));

  return (
    <header className={styles.container}>
      <div>
        <button type="button" onClick={handleClick}>Change Img</button>
        <Timer />
      </div>
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={city} onChange={handleChange} placeholder="City name..." />
      </form>
    </header>
  );
}

export default Header;
