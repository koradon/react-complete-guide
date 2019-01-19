import React from "react";

const userInput = props => {
  const style = {
    border: "2px solid red"
  };

  return (
    <div>
      <p>us: {props.currentName}</p>
      <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName}
      />
    </div>
  );
};

export default userInput;
