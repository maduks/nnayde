import React from "react";
import "./styles.css";
const LabelInput = (props) => {
  return (
    <div className="nform-container">
      <label className="nform-label">{props.title}</label>
      <input
        placeholder={props.placeholder}
        type={props.type}
        className="nform-input-control"
      />
    </div>
  );
};

export default LabelInput;
