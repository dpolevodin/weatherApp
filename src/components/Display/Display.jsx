import style from "./Display.module.css";

const timeParse = (date) => {
  let parseDate = new Date(date * 1000);
  return `${parseDate.getHours()}:${parseDate.getMinutes()}:${parseDate.getSeconds()}`;
};

const temperatureToCelsium = (temp) => {
  return Math.round(temp - 273.15);
};

export const Display = ({ weather, name, wind, sys, main }) => {
  const iconUrl = "http://openweathermap.org/img/w/" + weather[0].icon + ".png";

  return (
    <div className={style._}>
      <img className={style.image} src={iconUrl} alt={weather[0].icon} />
      <div>{weather[0].description}</div>
      <div>Город: {name}</div>
      <div>Скорость ветра: {Math.round(wind.speed)} м/c</div>
      <div>Восход: {timeParse(sys.sunrise)}</div>
      <div>Закат: {timeParse(sys.sunset)}</div>
      <div>Температура воздуха: {temperatureToCelsium(main.temp)} °C</div>
      <div>Ощущается как: {temperatureToCelsium(main.feels_like)} °C</div>
      <div>Влажность воздуха: {main.humidity} %</div>
    </div>
  );
};
