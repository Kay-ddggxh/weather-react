import React, { useState } from "react";
import axios from "axios";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: ``,
      date: new Date(response.data.dt * 1000),
    });
  }

  const apiKey = "0e309f005b8c859d835c3b5eb9cf22ec";

  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric
`;
  axios.get(apiUrl).then(handleResponse);

  if (weatherData.ready) {
    return "all the data";
  } else {
    return "Loading...";
  }
}
