import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in Moscow is ${response.data.main.temp}°C`);
  }
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Moscow&appid=0e309f005b8c859d835c3b5eb9cf22ec&units=metric
`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <h2>Hello again</h2>
      <Loader
        type="Hearts"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000}
      />
    </div>
  );
}
