import style from "./Input.module.css";

export const Input = ({ value, onChange, name }) => {
  return (
    <input
      className={style._}
      value={value}
      onChange={onChange}
      placeholder="Введите название города"
      name={name}
      autoComplete="off"
    />
  );
};
