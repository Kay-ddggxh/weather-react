import React, { useState } from "react";
import axios from "axios";

import Header from "./Header";
import Forecast from "./Forecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "0e309f005b8c859d835c3b5eb9cf22ec";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form className="mt-4" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9 w-100">
              <div className="form-group">
                <input
                  type="search"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter your city here"
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleCityChange}
                />
              </div>
            </div>
            <div className="col-3">
              <button type="submit" className="btn btn-primary w-100">
                Go
              </button>
            </div>
          </div>
        </form>
        <Header data={weatherData} />

        <br />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
