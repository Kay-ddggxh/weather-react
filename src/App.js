import React from "react";
import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="weather-app">
        <Weather defaultCity="Dublin" />
      </div>
      <span className="open-source-link">
        <a
          href="https://github.com/Kathrin-ddggxh/weather-react"
          target="_blank"
        >
          Open-source code{" "}
        </a>
        by Kathrin Welfare
      </span>
    </div>
  );
}
