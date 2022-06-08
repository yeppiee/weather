import React, { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../customHooks/redux';
import { useGetHolidaysQuery } from '../../store/reducers/CalendarApi';
import { userSlice } from '../../store/reducers/UserSlice';
import styles from './CalendarList.module.css';

function CalendarList() {
  const { dateObject } = useAppSelector((state) => state.userSlice);
  const { changeDateObject } = userSlice.actions;
  const { data, isSuccess, refetch } = useGetHolidaysQuery(dateObject);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const currentDate = new Date().toLocaleDateString();
    if (dateObject !== currentDate) {
      dispatch(changeDateObject(currentDate));
      refetch();
    }
  }, [changeDateObject, dateObject, dispatch, refetch]);

  if (!isSuccess) return <div>Loading...</div>;
  const { response } = data;
  const { holidays } = response;

  return (
    holidays.length ? (
      <ul className={styles.ul}>
        {holidays.map((holiday) => (
          <li key={holiday.date.iso} className={styles.li}>
            <span className={styles.date}>{holiday.date.iso.slice(0, 10)}</span>
            <span className={styles.name}>{holiday.name}</span>
          </li>
        ))}
      </ul>
    ) : <div>There are no holidays in this month</div>

  );
}

export default CalendarList;
