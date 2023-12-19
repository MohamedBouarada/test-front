// src/components/Sidebar.js
import React, { useState } from "react";
import styles from "./sidebar.module.css";

const Sidebar = ({ items }) => {
  const [firstItem, setFirstItem] = useState(items[0]);

  const handleItemClick = (index) => {
    setFirstItem(items[index]);
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <div className={styles.circle}></div>
          {firstItem}
        </h2>
        <div className={styles.separator}></div>
      </div>
      <ul>
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => handleItemClick(index)}
            className={
              firstItem === item ? styles.selectedItem : styles.grayItem
            }
          >
            <div className={styles.circle}></div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
