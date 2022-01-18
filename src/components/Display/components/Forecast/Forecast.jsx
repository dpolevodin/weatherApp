import style from "./Forecast.module.css";
import { useState, useEffect } from "react";
import { ForecastItem } from "./components/ForecastItem/ForecastItem";
import { getImage } from "../../../../utils/heplersFunction";

export const Forecast = ({ city = "Tyumen" }) => {
  const [forecast, setForecast] = useState([]);

  const urlForecast =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=92070bdae24e4441042ca6528d8170a2&lang=ru";

  useEffect(() => {
    const fetchData = async () => {
      await fetch(urlForecast)
        .then((data) => data.json())
        .then((result) => {
          setForecast(result.list);
        })
        .catch((error) => {
          console.error(error);
        });
    };
    fetchData();
    return () => {};
  }, [urlForecast]);

  const forecastList =
    forecast?.length > 0
      ? forecast.map((item) => {
          return (
            <ForecastItem
              key={item.dt}
              degrees={item.main.temp}
              title={item.dt_txt}
              imageUrl={getImage(item.weather[0].icon)}
            />
          );
        })
      : null;

  return <div className={style._}>{forecastList}</div>;
};
