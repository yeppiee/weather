import React from 'react';
import Timer from '../../components/Timer';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import styles from './Header.module.css';

function Header() {
  const { city } = useAppSelector((state) => state.userReducer);
  const { changeCity, changeRequestCity } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeCity(e.target.value));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(changeRequestCity(city));
  };

  return (
    <header className={styles.container}>
      <Timer />
      <form onSubmit={handleSubmit}>
        <input className={styles.input} type="text" value={city} onChange={handleChange} placeholder="City name..." />
      </form>
    </header>
  );
}

export default Header;
