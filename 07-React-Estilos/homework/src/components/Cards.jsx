import React from "react";
import Card from "./Card";
import styles from "../css/cards.module.css";

export default function Cards({ cities }) {
  // acá va tu código
  // tip, podés usar un map
  console.log(cities);
  return (
    <div>
      <div className={styles.container}>
        {cities.map((city, index) => {
          console.log(city);
          return (
            <Card
              max={city.main.temp_max}
              min={city.main.temp_max}
              name={city.name}
              img={city.weather[0].icon}
              onClose={() => {
                alert(city.name);
              }}
              styles={styles}
              key={city.name + index}
            />
          );
        })}
      </div>
    </div>
  );
}
