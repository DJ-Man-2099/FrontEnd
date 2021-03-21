import React from 'react';
import Card from '../Card/Card'
import filler from '../../assets/Filler.png'
import classes from './CoursePreview.module.css'
import ImageHolder from '../ImageHolder/ImageHolder'
 
const CoursePreview = (props) => {
    return (
        <div className={classes.holder}>
          <Card shadow>
            <div className={classes.CourseTitle}>Group Name</div>
            <div className={classes.CourseDes}>
              Describe the contents of the Group
            </div>
            <ImageHolder filler={filler}/>
          </Card>
        </div>
    );
}
 
export default CoursePreview