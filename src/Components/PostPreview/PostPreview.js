import React from "react";
import classes from "./PostPreview.module.css";
import Card from "../Card/Card";
import CircularAvatar from "../CircularAvatar/CircularAvatar";
import filler from "../../assets/Filler.png";

const GroupPreview = (props) => {
  return (
    <Card
      style={{
        padding: "0",
        border: "1px solid purple",
        width: "25vw",
        overflow: "hidden",
        zIndex: "10",
      }}
    >
      <div
        style={{
          margin: "1vh 0",
        }}
      >
        <div
          style={{
            margin: "auto",
            width: "70%",
            height: "20vh",
          }}
        >
          <img
            src={filler}
            alt=""
            style={{
              width: "100%",
              maxHeight: "100%",
              alignSelf: "center",
              paddingTop: "1vw",
            }}
          />
        </div>
      </div>
      <div className={classes.Bottom}>
        <div className={classes.CourseTitle}>Course Name</div>
        <div className={classes.CourseDes}>
          Describe the contents of the course
        </div>
      </div>
    </Card>
  );
};

export default GroupPreview;
