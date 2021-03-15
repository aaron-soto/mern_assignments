import React, { useState } from "react";
import styles from "./BoxGenerator.module.css";
import Box from "./Box";

const BoxGenerator = (props) => {
  const [newBox, setNewBox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onNewBox(newBox);
    e.target.value = "";
  };
  const colorChange = (e) => {
    setNewBox({
      color: e.target.value,
    });
  };

  return (
    <div>
      <h1>Add a new box!</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input className={styles.input} type="text" onChange={colorChange} />
        </label>
        <button className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default BoxGenerator;
