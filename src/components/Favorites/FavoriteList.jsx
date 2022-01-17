import { FavoriteItem } from "./components/FavoriteItem/FavoriteItem";
import style from "./FavoriteList.module.css";
import { tempToCelsium } from "../../utils/heplersFunction";

export const FavoriteList = ({ favoritesList, onClick }) => {
  const renderList = favoritesList.map((item) => (
    <FavoriteItem
      title={item.name}
      src={item.weather[0].icon}
      weatherCount={tempToCelsium(item.main.temp)}
      key={item.name}
      onClick={onClick}
    />
  ));

  return <div className={style._}>{renderList}</div>;
};
