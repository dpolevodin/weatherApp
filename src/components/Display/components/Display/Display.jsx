import style from "./Display.module.css";

const timeParse = (date) => {
  let parseDate = new Date(date * 1000);
  return `${parseDate.getHours()}:${parseDate.getMinutes()}:${parseDate.getSeconds()}`;
};

const temperatureToCelsium = (temp) => {
  return Math.round(temp - 273.15);
};

export const Display = ({ weather, name, wind, sys, main }) => {
  const iconUrl =
    weather[0] !== undefined
      ? "http://openweathermap.org/img/w/" + weather[0].icon + ".png"
      : "http://openweathermap.org/img/w/01n.png";

  return (
    <div className={style._}>
      <div className={style.imageWrapper}>
        <img className={style.image} src={iconUrl} alt={weather[0].icon} />
        <div className={style.listElement}>{weather[0].description}</div>
      </div>
      <div className={style.listElement}>Город: {name}</div>
      <div className={style.listElement}>
        Скорость ветра: {Math.round(wind.speed)} м/c
      </div>
      <div className={style.listElement}>Восход: {timeParse(sys.sunrise)}</div>
      <div className={style.listElement}>Закат: {timeParse(sys.sunset)}</div>
      <div className={style.listElement}>
        Температура воздуха: {temperatureToCelsium(main.temp)} °C
      </div>
      <div className={style.listElement}>
        Ощущается как: {temperatureToCelsium(main.feels_like)} °C
      </div>
      <div className={style.listElement}>
        Влажность воздуха: {main.humidity} %
      </div>
    </div>
  );
};
