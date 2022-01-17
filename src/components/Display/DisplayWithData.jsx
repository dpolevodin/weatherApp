import { Display } from "./components/Display/Display";
import { useState, useEffect } from "react";
import style from "./DisplayWithData.module.css";
import { Searchbar } from "./components/Searchbar/Searchbar";
import cc from "classcat";
import { Loader } from "../common/Loader/Loader";
import { AddToFavorite } from "./components/AddToFavorite/AddToFavorite";
import { FavoriteList } from "../Favorites/FavoriteList";

export const DisplayWithData = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [city, setCity] = useState("Tyumen");
  const [currentWeather, setCurrentWeather] = useState("Clear");
  const [favoriteList, setFavoriteList] = useState([]);

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
          if (result.hasOwnProperty("weather")) {
            setCurrentWeather(result.weather[0].main);
          }
        })
        .catch((error) => {
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

  const handleClickAddToFavorite = (event) => {
    event.preventDefault();
    const result = [...new Set([weather, ...favoriteList])];
    setFavoriteList(result);
  };

  const handleClickDeleteFromFavorite = (event) => {
    event.preventDefault();
    const city = event.currentTarget.name;
    setFavoriteList(favoriteList.filter((item) => item.name !== city));
  };

  return (
    <div className={weatherStyle}>
      {favoriteList.length > 0 && (
        <FavoriteList
          favoritesList={favoriteList}
          onClick={handleClickDeleteFromFavorite}
        />
      )}
      <div className={style._}>
        <Searchbar onSubmit={handleSubmit} />
        {(isLoading && <Loader />) ||
          (weather && city && <Display {...weather} />)}
        <AddToFavorite onClick={handleClickAddToFavorite} />
      </div>
    </div>
  );
};
