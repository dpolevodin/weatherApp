import { Button } from "../../../common/Button/Button";
import style from "./AddToFavorite.module.css";

export const AddToFavorite = () => {
  return (
    <div className={style._}>
      <span className={style.text}>Добавить в избранное</span>
      <Button type={"round"}>+</Button>
    </div>
  );
};
