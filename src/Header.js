import React from "react";
import "./Header.css";

export default function Header() {
  let weatherData = {
    temperature: 9,
    city: "Dublin",
    time: "Sunday 10:00",
    description: "cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    humidity: 80,
    wind: 12,
  };
  return (
    <div className="Header">
      <header className="border rounded mt-2">
        <div className="row">
          <div className="col-6">
            <h1>
              <span className="current-temperature">
                {weatherData.temperature}
              </span>
              <span className="temp-units">
                <a href="/" className="active">
                  °C
                </a>{" "}
                |<a href="/">°F</a>
              </span>
            </h1>
          </div>
          <div className="col-6">
            <h2>
              <img src={weatherData.imgUrl} alt={weatherData.description}></img>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{weatherData.city}</h3>
            <section className="time">{weatherData.time}</section>
          </div>
          <div className="col-6">
            <h4>{weatherData.description}</h4>
            <ul>
              <li className="extra-info">
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li className="extra-info">
                Wind: <span>{weatherData.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
