import React, { useEffect, useState } from "react";

const Weather = ({ inf }) => {
  const { temp, humidity, pressure, speed, country, sunset, name, mood } = inf;
  const [weatherstate, setstate] = useState("");
  useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clouds":
          setstate("wi-day-cloudy");
          break;
        case "Sunny":
          setstate("wi-wi-sunny");
          break;
        default:
          setstate("wi-fog");
      }
    }
  }, [mood]);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timestr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherstate}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp}</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{mood}</div>
            <div className="place">
              {name}, {country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-sunset"></i>
              </p>
              <p className="extra-info-leftside">
                {timestr} <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>
          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br />
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Weather;
