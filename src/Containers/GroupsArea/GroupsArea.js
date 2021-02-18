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
          <div className={classes.behind}></div>
        </div>
      </div>
    );
  }
}

export default GroupsArea;
