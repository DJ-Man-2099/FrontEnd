import classes from "./GroupsArea.module.css";
import React, { Component } from "react";
import GroupPreview from "../../Components/GroupPreview/CoursePreview";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

class GroupsArea extends Component {
  state = {
    Groups: [],
  };

  constructor(props) {
    super(props);
    this.GroupsArea = React.createRef();
    for (let index = 0; index < 10; index++) {
      this.state.Groups.push({
        id: index,
        Title: `Group ${index + 1}`,
        Desc: "Blah Blah Blah",
      });
    }
  }

  render() {
    let Groups = [];

    for (let index = 0; index < this.state.Groups.length; index++) {
      Groups.push(
        <GroupPreview
        id={this.state.Groups[index].id}
          key={index}
          Title={this.state.Groups[index].Title}
          Desc={this.state.Groups[index].Desc}
        />
      );
    }

    return (
      <div className={classes.GroupsArea}>
        <div className={classes.Title}>Groups You're In</div>
        <div className={classes.SwipeList}>
          <div
            className={classes.Right}
            onClick={() => {
              this.GroupsArea.current.scrollLeft -= 250;
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} size="4x" />
          </div>
          <div className={classes.InnerSwipeList} ref={this.GroupsArea}>
            {Groups}
          </div>
          <div
            className={classes.Left}
            onClick={() => {
              this.GroupsArea.current.scrollLeft += 250;
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} size="4x" />
          </div>
        </div>
      </div>
    );
  }
}

export default GroupsArea;
