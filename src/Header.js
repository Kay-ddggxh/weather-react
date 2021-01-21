import React from "react";
import "./Header.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

export default function Header(props) {
  return (
    <div className="Header">
      <header className="border rounded mt-2">
        <div className="row">
          <div className="col-6">
            <h1>
              <span className="current-temperature">
                {props.data.temperature}
              </span>
              <WeatherTemperature celsius={props.data.temperature} />
            </h1>
          </div>
          <div className="col-6">
            <h2>
              <img src={props.data.iconUrl} alt={props.data.description}></img>
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h3>{props.data.city}</h3>
            <section className="time">
              <FormattedDate date={props.data.date} />
            </section>
          </div>
          <div className="col-6">
            <h4>{props.data.description}</h4>
            <ul>
              <li className="extra-info">
                Humidity: <span>{props.data.humidity}</span>%
              </li>
              <li className="extra-info">
                Wind: <span>{props.data.wind}</span>km/h
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
}
