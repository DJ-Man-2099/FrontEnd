import classes from "./GroupsArea.module.css";
import React, { Component } from "react";
import GroupPreview from "../../Components/GroupPreview/GroupPreview";

class GroupsArea extends Component {
  render() {
    return (
      <div
        className={classes.Main}
        style={{
          flex: this.props.flex,
        }}
      >
        <div className={classes.Title}>{this.props.Title}</div>
        <div className={classes.holder}>
          <div className={classes.MainPreview}></div>
            <GroupPreview />
          <div
            style={{
              position: 'absolute',
              bottom:'0',
              transform: "translate3d(0px,10px,0px)",
              width: '23vw',
              height:'10vh',
              backgroundColor: 'rgb(185, 183, 183)',
              border: '1px solid purple',
              borderRadius: '15px',
            }}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsArea;