import React, { useState } from 'react';
import styles from './Timer.module.css';
import { getAMPM, getDate, getTime } from '../../services/utils';

function Timer() {
  const [date, setDate] = useState(new Date());

  const timeUpdate = () => {
    setTimeout(() => setDate(new Date()), 1000);
  };
  timeUpdate();

  return (
    <div>
      <span className={styles.time}>{getTime(date)}</span>
      <span>{getAMPM(date)}</span>
      <div>
        {getDate(date)}
      </div>
    </div>
  );
}

export default Timer;
