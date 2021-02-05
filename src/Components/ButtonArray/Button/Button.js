import React from 'react';
import classes from './Button.module.css'
const Button = (props) => {
    const Looks = !props.isActive
    ? classes.Button
    : classes.Button + " " + classes.Active;

    return (
        <input
              type="button"
              value={props.value}
              className={Looks}
              onClick={props.onClick}
            />
    );
}
 
export default Button