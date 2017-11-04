import dateFormat from 'dateformat';

const timeToString = time => {
  return dateFormat(time, 'h:MM:ss TT');
};

export { timeToString };
