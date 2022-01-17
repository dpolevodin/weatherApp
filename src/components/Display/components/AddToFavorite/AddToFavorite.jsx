import { Button } from "../../../common/Button/Button";
import style from "./AddToFavorite.module.css";

export const AddToFavorite = ({ onClick }) => {
  return (
    <div className={style._}>
      <span className={style.text}>ДОБАВИТЬ В ИЗБРАННОЕ</span>
      <Button type={"round"} onClick={onClick}>
        +
      </Button>
    </div>
  );
};
