import classes from "./CoursesArea.module.css";
import React, { Component } from "react";
import Card from "../../Components/Card/Card";
import filler from "../../assets/Filler.png";
import Left from '../../assets/Left.png'
import Right from '../../assets/Right.png'

class CoursesArea extends Component {
  constructor(props) {
    super(props);
    this.CoursesArea = React.createRef();
  }

  render() {
    let courses = [];

    for (let index = 0; index < 15; index++) {
      courses.push(
        <div key={index} className={classes.holder}>
          <Card style={{
            backgroundColor:"red",
            
          }}  shadow>
            <div className={classes.CourseTitle}>Course Name</div>
            <div className={classes.CourseDes}>
              Describe the contents of the course
            </div>
            <img
              src={filler}
              alt=""
              style={{
                maxHeight: "100%",
                maxWidth: "100%",
              }}
            />
          </Card>
        </div>
      );
    }

    return (
      <div className={classes.CoursesArea}>
        <div className={classes.Title}>Courses You're Taking</div>
        <div className={classes.SwipeList}>
          <button
            className={classes.Right}
            onClick={() => {
              this.CoursesArea.current.scrollLeft -= 250;
            }}
          >
            <img src={Left} alt='' style={{
              maxHeight: '70%',
              maxWidth: '70%',
            }}/>
          </button>
          <div className={classes.InnerSwipeList} ref={this.CoursesArea}>
          {courses}
          </div>
          <button className={classes.Left}            
            onClick={() => {
              this.CoursesArea.current.scrollLeft += 250;
            }}
          >
          <img src={Right} alt='' style={{
            maxHeight: '70%',
              maxWidth: '70%',
          }}/>
          </button>
        </div>
      </div>
    );
  }
}

export default CoursesArea;
