import classes from "./App.module.css";
import LoginPage from "./Containers/Login Full Page/LoginPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import React, { useState } from "react";
import ProfilePage from "./Containers/ProfilePage/ProfilePage";

const App = () => {
  const [logged, setLogged] = useState(true);

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          {logged ? (
            <React.Fragment>
              <Route
                path="/"
                exact
                render={() => <HomePage Name="David John" id="5" />}
              />
              <Route
                path="/profile"
                exact
                render={() => <ProfilePage Name="David John" id="5" />}
              />
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Redirect from="/" exact to="login" />
              <Redirect from="/profile" exact to="login" />
            </React.Fragment>
          )}
          <Route
            path="/login"
            exact
            render={() => (
              <LoginPage
                SignIn={() => {
                  setLogged(true);
                }}
              />
            )}
          />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
