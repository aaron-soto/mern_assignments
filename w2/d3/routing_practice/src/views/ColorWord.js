import React from "react";

const ColorWord = (props) => {
  return (
    <h2 style={{ backgroundColor: props.bgColor, color: props.textColor }}>
      The word is: {props.word}
    </h2>
  );
};

export default ColorWord;
