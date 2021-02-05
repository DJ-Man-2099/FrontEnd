import React, { Component } from "react";
import classes from "./Login.module.css";
import LoginField from "../../Components/LoginField/LoginField";
import SignUpField from "../../Components/SignUpField/SignUpField";
import ButtonArray from "../../Components/ButtonArray/ButtonArray";
import Terms from "../../Components/TermsAndConditions/Terms";

class Login extends Component {
  state = {
    logging_in: true,
    UserName: "",
    Email: "",
    Password: "",
    Agreed: false,
    UserNameError: false,
    EmailError: false,
    PasswordError: false,
    AgreedError: false,
  };

  signin = () =>
    this.handleSigninCLicked(
      //TODO: Add the Sign in Function Here
      () => alert("Sign in Sucessfully")
    );

  signup = () => this.handleSignupCLicked(
      //TODO Add The Sign up Function Here
      () => alert("Sign up Sucessfully")
  );

  handleSigninCLicked = (callBack) => {
    if (this.state.logging_in) {
      console.log("Signing in");
      if (this.state.Email !== "" && this.state.Password !== "") {
        //This is where you add the Sign in Logic
        callBack();
        this.initSignin()
      } else {
        this.HandleSigninError();
      }
    } else {
      this.initSignin();
    }
  };

  handleSignupCLicked = (callBack) => {
    if (this.state.logging_in) {
      this.initSignup();
    }else{
      if (
        this.state.UserName !== "" &&
        this.state.Email !== "" &&
        this.state.Password !== "" &&
        this.state.Agreed
      ) {
        callBack();
        this.initSignin()
      } else {
        this.HandleSignupError()
      }
    }
  };

  changeInput = (event) => {
    console.log(event.target.value);
    this.setState({
      [event.target.name]: event.target.value,
    });
    if (this.state[event.target.name + "Error"]) {
      this.setState({
        [event.target.name + "Error"]: false,
      });
    }
  };

  changeAgreed = () => {
    this.setState((prevstate) => {
      return {
        Agreed: !prevstate.Agreed,
      };
    });
    if (this.state.AgreedError) {
      this.setState({
        AgreedError: false,
      });
    }
  };

  HandleSigninError() {
    if (this.state.Email === "") {
      this.setState({
        EmailError: true,
      });
    }
    if (this.state.Password === "") {
      this.setState({
        PasswordError: true,
      });
    }
  }

  HandleSignupError() {
    if (this.state.Email === "") {
      this.setState({
        EmailError: true,
      });
    }
    if (this.state.Password === "") {
      this.setState({
        PasswordError: true,
      });
    }
    if (this.state.UserName === "") {
      this.setState({
        UserNameError: true,
      });
    }
    if (!this.state.Agreed) {
      this.setState({
        AgreedError: true,
      });
    }
  }

  initSignup() {
    this.setState({
      logging_in: false,
      UserName: "",
      Email: "",
      Password: "",
      Agreed: false,
      UserNameError: false,
      EmailError: false,
      PasswordError: false,
    });
  }

  initSignin() {
    this.setState({
      logging_in: true,
      UserName: "",
      Email: "",
      Password: "",
      Agreed: false,
      UserNameError: false,
      EmailError: false,
      PasswordError: false,
      AgreedError: false,
    });
  }

  render() {
    const loginField = (
      <LoginField
        EmailError={this.state.EmailError}
        onChange={this.changeInput}
        PasswordError={this.state.PasswordError}
      />
    );
    const signupField = (
      <SignUpField
        UserNameError={this.state.UserNameError}
        EmailError={this.state.EmailError}
        onChange={this.changeInput}
        PasswordError={this.state.PasswordError}
        checked={this.state.Agreed}
        changeAgreed={this.changeAgreed}
        AgreedError={this.state.AgreedError}
      />
    );
    const Main_field = this.state.logging_in ? loginField : signupField;

    return (
      <div className={classes.Login}>
        <h1 className={classes.MainTitle}>Get Started</h1>
        <div className={classes.Main}>{Main_field}</div>
        <ButtonArray
          logging_in={this.state.logging_in}
          SigninCLicked={this.signin}
          SignupCLicked={this.signup}
        />
      </div>
    );
  }
}

export default Login;
