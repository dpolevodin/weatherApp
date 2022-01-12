import { Display } from "./components/Display/Display";
import { Loader } from "../common/Loader/Loader";
import { useState, useEffect } from "react";
import style from "./DisplayWithData.module.css";
import { Searchbar } from "./components/Searchbar/Searchbar";
import cc from "classcat";

export const DisplayWithData = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Tyumen");

  // const currentWeather = "Clear";
  const currentWeather = !!weather ? weather.weather[0].main : "Clouds";

  const weatherStyle = cc([style.weatherBackground, style[currentWeather]]);

  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=92070bdae24e4441042ca6528d8170a2&lang=ru";

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      await fetch(url)
        .then((data) => data.json())
        .then((result) => {
          setIsLoading(false);
          setWeather(result);
        })
        .catch((err) => {
          alert(err);
          setIsLoading(false);
        });
    };
    fetchData();
    return () => {};
  }, [url]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = event.target.cityName.value;
    setCity(value);
  };

  console.log(weather);
  return (
    <div className={weatherStyle}>
      <div className={style._}>
        <Searchbar onSubmit={handleSubmit} />
        {(isLoading && <Loader />) ||
          (weather && city && <Display {...weather} />)}
      </div>
    </div>
  );
};
