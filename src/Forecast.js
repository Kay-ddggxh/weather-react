import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <section className="border rounded mt-2 forecast">
        <h5>Forecast</h5>
        <ul>
          <div className="row justify-content-around" id="forecast"></div>
        </ul>
      </section>
    </div>
  );
}
