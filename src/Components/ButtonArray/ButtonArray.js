import React from 'react';
import Button from './Button/Button';
import classes from './ButtonArray.module.css'
import {NavLink} from 'react-router-dom'
 
const ButtonArray = (props) => {

    return (
        <div className={classes.ButtonArea}>
            <Button 
            value={props.logging_in?"Sign up":"Submit"}
            isActive={!props.logging_in}
            onClick={props.SignupCLicked}
            />
            <Button 
            value="Sign in"
            isActive={props.logging_in}
            onClick={props.SigninCLicked}
            />
          </div>

    );
}
 
export default ButtonArray