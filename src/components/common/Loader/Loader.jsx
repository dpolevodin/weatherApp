import style from "./Loader.module.css";
import { LoaderIcon } from "./components/LoaderIcon";

export const Loader = () => (
  <div className={style._}>
    <LoaderIcon />
    Загрузка...
  </div>
);
