import React, { useState } from 'react';
import { getDate, getTime } from '../services/utils';

function Timer() {
  const [date, setDate] = useState(new Date());

  const timeUpdate = () => {
    setTimeout(() => setDate(new Date()), 1000);
  };
  timeUpdate();

  return (
    <div>
      {getTime(date)}
      <div>
        {getDate(date)}
      </div>
    </div>
  );
}

export default Timer;
