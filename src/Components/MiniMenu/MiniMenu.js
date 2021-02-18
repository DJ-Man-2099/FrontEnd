import React from "react";
import classes from "./MiniMenu.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { faChevronDown, faSquare } from "@fortawesome/free-solid-svg-icons";
import filler from "../../assets/Filler.png";

const MiniMenu = (props) => {
  return (
    <div className={classes.Main}>
      <div
        className={classes.holder}
        onClick={() => {
          alert("Notifications Appear");
          props.onNotifClick();
        }}
      >
        {props.notif !== 0 ? (
          <div className={classes.notif}>{props.notif}</div>
        ) : null}
        <FontAwesomeIcon icon={faBell} size="4x" fixedWidth />
      </div>
      <div
        className={classes.holder}
        onClick={() => {
          alert("Messages Appear");
          props.onMessageClick();
        }}
      >
        {props.message !== 0 ? (
          <div className={classes.notif}>{props.message}</div>
        ) : null}
        <FontAwesomeIcon icon={faCommentDots} size="4x" fixedWidth />
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
      }} onClick={()=>{
        alert('Menu Appear')
      }}>
        <div className={classes.holder}>
          <div className={classes.status}/>
          <FontAwesomeIcon icon={faSquare} size="5x" fixedWidth color="purple" />
          <img
            src={filler}
            alt=""
            style={{
              maxWidth: "80%",
              position: "absolute",
              zIndex: "10",
            }}
          />
        </div>
        <FontAwesomeIcon icon={faChevronDown}/>
      </div>
    </div>
  );
};

export default MiniMenu;
