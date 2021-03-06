import classes from "./CoursesArea.module.css";
import React, { Component } from "react";
import CoursePreview from "../../Components/CoursePreview/CoursePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

class CoursesArea extends Component {
  constructor(props) {
    super(props);
    this.CoursesArea = React.createRef();
  }

  render() {
    let courses = [];

    for (let index = 0; index < 15; index++) {
      courses.push(
        <CoursePreview key={index}/>
      );
    }

    return (
      <div className={classes.CoursesArea}>
        <div className={classes.Title}>Courses You're Taking</div>
        <div className={classes.SwipeList}>
          <div
            className={classes.Right}
            onClick={() => {
              this.CoursesArea.current.scrollLeft -= 250;
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size='4x'/>
          </div>
          <div className={classes.InnerSwipeList} ref={this.CoursesArea}>
          {courses}
          </div>
          <div className={classes.Left}            
            onClick={() => {
              this.CoursesArea.current.scrollLeft += 250;
            }}
          >
          <FontAwesomeIcon icon={faChevronRight} size='4x'/>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursesArea;
