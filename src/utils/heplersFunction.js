export const timeParse = (date) => {
  let parseDate = new Date(date * 1000);
  const time = `${parseDate.getHours()}:${parseDate.getMinutes()}:${parseDate.getSeconds()}`;
  return time;
};

export const tempToCelsium = (temp) => {
  return Math.round(temp - 273.15);
};

export const dateParse = (string) => {
  const dateList = string.split("");
  const day = dateList.slice(8, 10).join("");
  const month = dateList.slice(5, 7).join("");
  const newDate = `${day}.${month}`;
  return newDate;
};

export const forecastTimeParse = (string) => {
  const dateList = string.split("");
  const time = dateList.slice(11, 16).join("");
  return time;
};

export const getImage = (iconName) =>
  `http://openweathermap.org/img/w/${iconName}.png`;
