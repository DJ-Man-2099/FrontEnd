import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div
      className={
        classes.Main +
        " " +
        (props.row ? classes.Row : classes.Column) +
        " " +
        (props.shadow ? classes.shadow : "")
      }
      style={{
        backgroundColor: props.color,
        padding: props.padding,
        flex: props.flex,
        alignItems: props.alignItems,
        height: props.height,
      }}
    >
      {props.children}
    </div>
  );
};

export default Card;
