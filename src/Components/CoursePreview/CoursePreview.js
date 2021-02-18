import React from 'react';
import Card from '../Card/Card'
import filler from '../../assets/Filler.png'
import classes from './CoursePreview.module.css'
 
const CoursePreview = (props) => {
    return (
        <div key={props.key} className={classes.holder}>
          <Card shadow>
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
 
export default CoursePreview