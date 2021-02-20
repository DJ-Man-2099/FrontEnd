import classes from "./App.module.css";
import LoginPage from "./Containers/Login Full Page/LoginPage";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Containers/HomePage/HomePage";
import { useState } from "react";

const App=()=> {
  const [logged, setLogged] = useState(false);

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Switch>
          {logged ? (
            <Route path="/" exact component={HomePage} />
          ) : (
            <Redirect from="/" exact to="login" />
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
}

export default App;
