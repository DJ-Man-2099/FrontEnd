import classes from "./PostsArea.module.css";
import React, { Component } from "react";
import PostPreview from "../../Components/PostPreview/PostPreview";

class PostsArea extends Component {
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
            <PostPreview />
          <div
            style={{
              position: 'absolute',
              bottom:'0',
              transform: "translate3d(0px,10px,0px)",
              width: '23vw',
              height:'10vh',
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

export default PostsArea;
