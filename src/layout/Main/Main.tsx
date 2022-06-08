import React from 'react';
import ApiSwitcher from '../../components/ApiSwitcher';
import styles from './Main.module.css';

function Main() {
  return (
    <main className={styles.container}>
      <div>Calendar</div>
      <ApiSwitcher />
    </main>
  );
}

export default Main;
