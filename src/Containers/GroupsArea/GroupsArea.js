import classes from "./GroupsArea.module.css";
import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import filler from '../../assets/Filler.png'

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
          <Card color="green" shadow alignItems="flex-start">
            <div className={classes.CourseTitle}>Course Name</div>
            <div className={classes.CourseDes}>
              Describe the contents of the course
            </div>
            <img
              src={filler}
              alt=""
              style={{
                maxHeight: "50%",
                maxWidth: "50%",
                alignSelf: "center",
                paddingTop: "1vw"
              }}
            />
          </Card>
        </div>
      </div>
    );
  }
}

export default GroupsArea;
