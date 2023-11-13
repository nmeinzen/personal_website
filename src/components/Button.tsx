import "./Button.css";
import React from 'react';


export const Button = (props) => {
  return <button className="main_button">{props.text}</button>;
};
