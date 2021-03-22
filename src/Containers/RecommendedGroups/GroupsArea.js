import classes from "./GroupsArea.module.css";
import React, { Component } from "react";
import GroupPreview from "../../Components/RecommendedGroup/GroupPreview";
import Card from "../../Components/Card/Card";
class GroupsArea extends Component {
  state = { Groups: [], dismissed: false };

  constructor() {
    super();
    for (let index = 10; index < 20; index++) {
      this.state.Groups.push({
        id: index,
        Title: `Group ${index + 1}`,
        Desc: "Blah Blah Blah",
      });
    }
  }

  dismiss = () => {
    this.setState(() => {
      return {
        dismissed: true,
      };
    });
    setTimeout(
      () =>
        this.setState((old, props) => {
          let temp = [...old.Groups];
          temp.pop();
          return {
            Groups: temp,
            dismissed: false,
          };
        }),
      500
    );
  };

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
          {
            <React.Fragment>
              <div
                className={
                  classes.front +
                  " " +
                  (this.state.dismissed ? classes.dismiss : "")
                }
              >
                {this.state.Groups.length !== 0 ? (
                  <GroupPreview
                  id={this.state.Groups[this.state.Groups.length - 1].id}
                    Title={
                      this.state.Groups[this.state.Groups.length - 1].Title
                    }
                    Desc={this.state.Groups[this.state.Groups.length - 1].Desc}
                    dismiss={this.dismiss}
                  />
                ) : (
                  <Card
                    style={{
                      border: "2px solid purple",
                      padding: "0",
                      height: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <h1>No More Groups</h1>
                  </Card>
                )}
              </div>
              <div
                className={
                  this.state.dismissed ? classes.appear : classes.behind
                }
              >
                {this.state.Groups.length > 1 ? (
                  <GroupPreview
                    id={this.state.Groups[this.state.Groups.length - 2].id}
                    Title={
                      this.state.Groups[this.state.Groups.length - 2].Title
                    }
                    Desc={this.state.Groups[this.state.Groups.length - 2].Desc}
                    dismiss={this.dismiss}
                  />
                ) : this.state.Groups.length !== 0 ||
                  (this.state.Groups.length === 0 && this.state.dismissed) ? (
                  <Card
                    style={{
                      border: "2px solid purple",
                      padding: "0",
                      overflow: "hidden",
                      height: "100%",
                      zIndex: "10",
                      position: "absolute",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "white",
                    }}
                  >
                    <h1>No More Groups</h1>
                  </Card>
                ) : null}
              </div>
            </React.Fragment>
          }
        </div>
      </div>
    );
  }
}

export default GroupsArea;
