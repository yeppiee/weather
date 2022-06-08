import React from 'react';
import ApiSwitcher from '../../components/ApiSwitcher';
import CalendarList from '../../components/CalendarList';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.container}>
      <CalendarList />
      <ApiSwitcher />
    </main>
  );
}

export default Main;
