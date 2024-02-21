import React from "react";

const TextLabel = (props) => {
  return (
    <div className="nform-container">
      <label className="nform-label">{props.title}</label>
      <textarea
        placeholder={props.placeholder}
        className="nform-text-control"
      ></textarea>
    </div>
  );
};

export default TextLabel;
