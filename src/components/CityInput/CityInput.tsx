import React from 'react';
import { useAppDispatch, useAppSelector } from '../../customHooks/redux';
import { userSlice } from '../../store/reducers/UserSlice';
import styles from './CityInput.module.css';

function CityInput() {
  const { city } = useAppSelector((state) => state.userSlice);
  const { changeCity, changeRequestCity } = userSlice.actions;
  const dispatch = useAppDispatch();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z]/g, '');
    dispatch(changeCity(value));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    dispatch(changeRequestCity(city));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={city}
        onChange={handleChange}
        placeholder="City name..."
      />
    </form>
  );
}

export default CityInput;
