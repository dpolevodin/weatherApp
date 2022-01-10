import { Display } from "./Display";
import { useState, useEffect } from "react";

export const DisplayWithData = () => {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const city = "Tyumen";
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
        });
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <>
      {(isLoading && <div>Загрузка...</div>) ||
        (weather && <Display {...weather} />)}
    </>
  );
};
