import React from "react";
import classes from "./MiniMenu.module.css";
import notif from "../../assets/notif.png";

const MiniMenu = (props) => {
  return (
    <div className={classes.Main}>
      <div
        className={classes.holder}
        onClick={() => {
            alert("Notifications Appear")
            props.onNotifClick()
    }}
      >
        {props.notif!==0?<div className={classes.notif}>{props.notif}</div>:null}
        <img src={notif} alt="" className={classes.image}></img>
      </div>
      <div className={classes.holder}>
        <img src={notif} alt="" className={classes.image}></img>
      </div>
      <div className={classes.holder}>
        <img src={notif} alt="" className={classes.image}></img>
      </div>
    </div>
  );
};

export default MiniMenu;
