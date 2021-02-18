import classes from "./HomePage.module.css";
import React from "react";
import Card from "../../Components/Card/Card";
import TopBar from "../../Components/TopBar/TopBar";
import CoursesArea from "../CoursesArea/CoursesArea";
import GroupsArea from "../GroupsArea/GroupsArea";
import PostsArea from "../PostsArea/PostsArea";

const HomePage = (props) => {
  return (
    <div className={classes.Main}>
      <Card style={{
        backgroundColor:"rgba(243, 238, 238, 0.651)",
        height:"fit-content",
      }}>
        <TopBar />
        <div className={classes.Center}>
          <div
            style={{
              maxWidth: "80%",
            }}
          >
            <Card
              style={{
                alignItems: "flex-start",
                flex: "3",
                height: "fit-content",
              }}
            >
              <CoursesArea />
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }}
              >
                <GroupsArea flex="2" Title="Recommended Groups" />
                <PostsArea flex="5" Title="Latest Posts" />
              </div>
            </Card>
          </div>
          <div className={classes.upcoming}>What's up</div>
        </div>
      </Card>
    </div>
  );
};

export default HomePage;
