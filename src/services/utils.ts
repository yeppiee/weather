import { Results } from '../types/Unsplash';

const days = ['Sunday ', 'Monday ', 'Tuesday ', 'Wednesday ', 'Thursday ', 'Friday ', 'Saturday '];

export const getTime = (date: Date) => {
  const hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  return `${date.toLocaleTimeString()} ${ampm}`;
};

export const getDate = (date: Date) => `${days[date.getDay()]}, ${date.toLocaleDateString('en-US', {
  month: 'long',
  day: 'numeric',
})}`;

export const getImgUrl = (arrUrl: Results) => arrUrl.map((item) => item.urls.raw);

export const getRandomNum = (arrUrl: Results) => {
  const arrLength = arrUrl.length;
  const randomNum = Math.floor(Math.random() * arrLength);
  return randomNum;
};
