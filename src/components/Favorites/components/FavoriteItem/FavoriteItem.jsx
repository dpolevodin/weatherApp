import style from "./FavoriteItem.module.css";
import { Button } from "../../../common/Button/Button";

export const FavoriteItem = () => {
  return (
    <div className={style._}>
      <div className={style.title}>Тюмень</div>
      <img
        className={style.image}
        src="http://openweathermap.org/img/w/13d.png"
        alt={"weatherIcon"}
      />

      <div className={style.weatherCount}>{"-21"} °C</div>
      <Button type={"delete"}>x</Button>
    </div>
  );
};
