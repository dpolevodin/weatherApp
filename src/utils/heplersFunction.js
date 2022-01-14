export const timeParse = (date) => {
  let parseDate = new Date(date * 1000);
  const time = `${parseDate.getHours()}:${parseDate.getMinutes()}:${parseDate.getSeconds()}`;
  return time;
};

export const tempToCelsium = (temp) => {
  return Math.round(temp - 273.15);
};
