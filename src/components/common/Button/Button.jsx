import style from "./Button.module.css";
import cc from "classcat";

export const Button = ({ children, onClick, type, name }) => {
  const mainStyle = cc([style._, style[type]]);
  return (
    <button className={mainStyle} onClick={onClick} name={name}>
      {children}
    </button>
  );
};
