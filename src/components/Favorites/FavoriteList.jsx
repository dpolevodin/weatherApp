import { FavoriteItem } from "./components/FavoriteItem/FavoriteItem";
import style from "./FavoriteList.module.css";

export const FavoriteList = (params) => {
  return (
    <div className={style._}>
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
    </div>
  );
};
