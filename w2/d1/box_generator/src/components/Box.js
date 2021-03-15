import React from "react";
import styles from "./BoxGenerator.module.css";

const Box = (props) => {
  const boxesHtml = props.boxes.map((box, i) => {
    return (
      <div style={{ backgroundColor: box.color }} className={styles.box}></div>
    );
  });
  return <div className={styles.boxes}>{boxesHtml}</div>;
};

export default Box;
