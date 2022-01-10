import style from "./Wrapper.module.css";

export const Wrapper = ({ children }) => {
  return <div className={style._}>{children}</div>;
};
