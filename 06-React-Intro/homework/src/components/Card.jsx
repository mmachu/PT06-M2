import React from "react";

export default function Card({ max, min, name, img, onClose }) {
  // acá va tu código
  console.log(max);
  return (
    <div className="card">
      <div className="top">
        <button onClick={onClose}>X</button>
      </div>
      <div className="middle">{name}</div>
      <div className="bottom">
        <div className="min-max">
          <div className="min">
            <p>Min</p>
            <p>{min}</p>
          </div>
          <div className="max">
            <p>Max</p>
            <p>{max}</p>
          </div>
        </div>
        <div className="img">
          {" "}
          <img
            src={`http://openweathermap.org/img/wn/${img}@2x.png`}
            alt="weather"
          />{" "}
        </div>
      </div>
    </div>
  );
}
