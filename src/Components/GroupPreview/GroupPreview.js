import React from "react";
import classes from "./GroupPreview.module.css";
import Card from "../Card/Card";
import CircularNumber from "../CircularNumber/CircularAvatar";
import CircularAvatar from "../CircularAvatar/CircularAvatar";
import filler from "../../assets/Filler.png";

const GroupPreview = (props) => {
  let Joined = [];

  const Number = 108;

  if (Number > 4) {
    Joined.push(
      <div
        key={0}
        className={classes.Circle}
        style={{
          zIndex: Number,
        }}
      >
        <CircularNumber filler={"+" + (Number - 3 <= 999 ? Number - 3 : 999)} />
      </div>
    );
  }

  for (let index = 0; index < (Number <= 4 ? Number : 3); index++) {
    Joined.push(
      <div
        key={index + 1}
        className={classes.Circle}
        style={{
          zIndex: Number - index - (Number > 4 ? 1 : 0),
          transform:
            "translateX(" + (-index - (Number > 4 ? 1 : 0)) * 30 + "px)",
        }}
      >
        <CircularAvatar filler={filler} />
      </div>
    );
  }

  return (
    <Card
      style={{
        padding: "0",
        border: "2px solid purple",
        width: "25vw",
        overflow: "hidden",
        zIndex: "10",
      }}
    >
      <div
        style={{
          margin: "10%",
        }}
      >
        <div className={classes.CourseTitle}>Course Name</div>
        <div className={classes.CourseDes}>
          Describe the contents of the course
        </div>
        <div
          style={{
            margin: "auto",
            width: "70%",
            height: "10vh",
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
        <div
          className={classes.Button}
          onClick={() => {
            alert("Group Joined");
          }}
        >
          Join Group
        </div>
        <div className={classes.Joined}>{Joined}</div>
      </div>
    </Card>
  );
};

export default GroupPreview;
