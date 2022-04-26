import React from 'react';
import './App.css';
import { useAppDispatch, useAppSelector } from './customHooks/redux';
import { userSlice } from './store/reducers/UserSlice';
// import useUserLocation from './customHooks/useUserLocation';

// 1. Реализовать получение города по IP адресу и ввод города в search. Done!
// 2. Подключить и настроить редакс. Done!
// 3. В redux store хранить все данные с api и выбранным городом.

// const UNSPLASH_ACCESS_KEY = 'DON2j_WwiFgfpZpAs8GcG5MrGG1E9ZcVcjhJW-5yaf8';

// const SG_WEATHER_API_KEY =
//   '6c733a8a-bbfc-11ec-9d13-0242ac130002-6c733b0c-bbfc-11ec-9d13-0242ac130002';

function App() {
  const { city } = useAppSelector((state) => state.userReducer);
  const { changeCity } = userSlice.actions;
  const dispatch = useAppDispatch();
  // useUserLocation();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    dispatch(changeCity(e.target.value));
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log('handleSubmit');
    // if (city.length) {
    //   localStorage.setItem('City', city);
    //   cityName.current = city;
    //   setNewRequest(!newRequest);
    // }
  };

  return (
    <div>
      Hello Weather App
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} onChange={handleChange} placeholder="City name..." />
      </form>
    </div>
  );
}

export default App;
