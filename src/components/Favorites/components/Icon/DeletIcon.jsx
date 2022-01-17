import style from "./DeletIcon.module.css";

export const DeletIcon = () => {
  return (
    <svg className={style._} viewBox="0 0 16 16">
      <path
        d="M2 3.5H3.5M14 3.5H12.5M5.5 3.5H10.5M5.5 3.5V2.5C5.5 1.94772 5.94772 1.5 6.5 1.5H9.5C10.0523 1.5 10.5 1.94772 10.5 2.5V3.5M5.5 3.5H3.5M10.5 3.5H12.5M3.5 3.5V13.5C3.5 14.0523 3.94772 14.5 4.5 14.5H11.5C12.0523 14.5 12.5 14.0523 12.5 13.5V3.5"
        strokeLinecap="round"
      />
      <path d="M6.5 6V12M9.5 6V12" strokeLinecap="round" />
    </svg>
  );
};
