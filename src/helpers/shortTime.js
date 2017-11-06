const SEC = 1000;
const MIN = SEC * 60;
const HRS = MIN * 60;
const DAYS = HRS * 24;

const leadZero = int => (int < 10 ? `0${int}` : `${int}`);

const timeToString = time => {
  time %= DAYS;
  var hrs = Math.floor(time / HRS);
  time -= hrs * HRS;
  var min = Math.floor(time / MIN);
  time -= min * MIN;
  var sec = Math.floor(time / SEC);

  return `${hrs}:${leadZero(min)}:${leadZero(sec)}`;
};

const timeToInt = time => {
  var arr = time.split(':');

  return arr[0] * HRS + arr[1] * MIN + arr[2];
};

export { timeToString, timeToInt };
