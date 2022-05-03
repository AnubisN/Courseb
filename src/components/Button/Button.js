import React from "react";
import "./Button.scss";

function Button(props) {
  const myClasss = `button__${props.type}`;
  return (
    <button
      onClick={props.onClick ? () => props.onClick() : null}
      className={props.disabled === true ? "button__disabled__body" : myClasss}
    >
      {props.children}
    </button>
  );
}

export default Button;
