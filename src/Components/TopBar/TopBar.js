import classes from "./TopBar.module.css";
import React, {useState} from "react";
import Search from "../Search/Search";
import Welcome from "../Welcome/Welcome";
import MiniMenu from '../MiniMenu/MiniMenu'

const TopBar = (props) => {

  const [notif, setNotif] =useState(2);

  return (
    <div className={classes.Main}>
      <Welcome Name="David John" />
      <Search />
      <MiniMenu notif={notif} onNotifClick={()=>{
        setNotif(0)
      }}/>
    </div>
  );
};

export default TopBar;
