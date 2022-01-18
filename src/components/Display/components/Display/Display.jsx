import style from "./Display.module.css";
import { timeParse, tempToCelsium } from "../../../../utils/heplersFunction";
import { getImage } from "../../../../utils/heplersFunction";

export const Display = ({ weather, name, wind, sys, main }) => {
  const iconUrl =
    weather !== undefined ? getImage(weather[0].icon) : getImage("01n");
  return (
    <div className={style._}>
      {(weather && (
        <div>
          <div className={style.cityName}>{name}</div>
          <div className={style.imageWrapper}>
            <img className={style.image} src={iconUrl} alt={weather[0].icon} />
            <div className={style.listElement}>{weather[0].description}</div>
          </div>

          <div className={style.listElement}>
            Скорость ветра: {Math.round(wind.speed)} м/c
          </div>
          <div className={style.listElement}>
            Восход: {timeParse(sys.sunrise)}
          </div>
          <div className={style.listElement}>
            Закат: {timeParse(sys.sunset)}
          </div>
          <div className={style.listElement}>
            Температура воздуха: {tempToCelsium(main.temp)} °C
          </div>
          <div className={style.listElement}>
            Ощущается как: {tempToCelsium(main.feels_like)} °C
          </div>
          <div className={style.listElement}>
            Влажность воздуха: {main.humidity} %
          </div>
        </div>
      )) || <div className={style.emptyListElement}>Город не найден</div>}
    </div>
  );
};
