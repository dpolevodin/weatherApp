import { Input } from "../../../common/Input/Input";
import style from "./Searchbar.module.css";

export const Searchbar = ({ onSubmit, onChange, value }) => {
  return (
    <form className={style._} onSubmit={onSubmit}>
      <Input onChange={onChange} value={value} name="cityName" />
    </form>
  );
};
