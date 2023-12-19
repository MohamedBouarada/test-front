import React from "react";
import styles from "./mainContent.module.css";

const MainContent = ({ title, cards }) => {
  return (
    <div className={styles.mainContent}>
      <h1>{title}</h1>
      <div className={styles.cardContainer}>
        {cards.map((card) => (
          <div key={card.id}>
            <h3 className={styles.cardTitle}>{card.name}</h3>
            <div className={styles.card}>
              <div className={styles.cardContainer}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
