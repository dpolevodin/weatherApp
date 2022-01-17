import style from "./FavoriteItem.module.css";
import { Button } from "../../../common/Button/Button";
import { DeletIcon } from "../Icon/DeletIcon";

export const FavoriteItem = ({ title, src, weatherCount }) => {
  return (
    <div className={style._}>
      <div className={style.title}>{title}</div>
      <img
        className={style.image}
        src={"http://openweathermap.org/img/w/" + src + ".png"}
        alt={"weatherIcon"}
      />

      <div className={style.weatherCount}>{weatherCount} °C</div>
      <Button type={"delete"}>
        <DeletIcon />
      </Button>
    </div>
  );
};
