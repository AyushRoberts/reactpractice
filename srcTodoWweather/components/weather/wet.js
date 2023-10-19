import React, { useEffect, useState } from "react";
import "./style2.css";
import Weather from "./weathercard";
const Wet = () => {
  const [searchVal, setSearch] = useState("varanasi");
  const [tempinf, setinf] = useState("");
  const getweather = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchVal}&units=metric&appid=570b9cf85835b1a1bc429ab55fb17e07`;
      const res = await fetch(url);
      const data = await res.json();
      const { temp, humidity, pressure } = data.main;
      const { main: mood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const weatherinfo = {
        temp,
        humidity,
        pressure,
        speed,
        country,
        sunset,
        name,
        mood,
      };
      setinf(weatherinfo);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getweather();
  }, []);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="searchTerm"
            type="search"
            autoFocus
            id="search"
            placeholder="search"
            value={searchVal}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="searchButton" onClick={getweather}>
            Search
          </button>
        </div>
      </div>
      <Weather inf={tempinf} />
    </>
  );
};

export default Wet;
