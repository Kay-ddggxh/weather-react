import React from "react";
import "./Header.css";
import FormattedDate from "./FormattedDate";

export default function Header(props) {
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
            <section className="time">
              <FormattedDate date={weatherData.date} />
            </section>
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
