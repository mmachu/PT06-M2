import React from "react";
// import styles from "../css/mainCard.module.css";

export default function Card({ max, min, name, img, onClose, styles, key }) {
  // acá va tu código

  return (
    <div className={styles.container}>
      {" "}
      <div className={styles.card} key={key}>
        <div className={styles.close}>
          <button className={styles.closeButton}>X</button>
        </div>

        <div className={styles.city}>{name}</div>
        <div className={styles.weatherContainer}>
          <div className={styles.min}>
            <div className={styles.split}>
              <p className={styles.minMaxTitle}>Min</p>{" "}
            </div>
            <div className={styles.split}>
              <p> {min}</p>
            </div>
          </div>
          <div className={styles.max}>
            <div className={styles.split}>
              <p className={styles.minMaxTitle}>Max</p>{" "}
            </div>
            <div className={styles.split}>
              <p> {max}</p>
            </div>
          </div>
          <div className={styles.weatherIcon}>
            <img
              className={styles.iconImg}
              src={`http://openweathermap.org/img/wn/${img}@2x.png`}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
