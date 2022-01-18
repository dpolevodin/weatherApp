import style from "./ForecastItem.module.css";
import { tempToCelsium } from "../../../../../../utils/heplersFunction";
import { dateParse } from "../../../../../../utils/heplersFunction";
import { forecastTimeParse } from "../../../../../../utils/heplersFunction";

export const ForecastItem = ({ title, degrees, imageUrl }) => {
  return (
    <div className={style._}>
      <div className={style.title}>{dateParse(title)}</div>
      <img className={style.image} src={imageUrl} alt="imageUrl"></img>
      <div className={style.time}>{forecastTimeParse(title)}</div>
      <div className={style.weather}>{tempToCelsium(degrees)} °C</div>
    </div>
  );
};
