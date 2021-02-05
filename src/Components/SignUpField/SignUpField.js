import React from "react";
import NormalTextField from "../NormalTextField/NormalTextField";
import PasswordTextField from "../PasswordField/PasswordField";

const SignUpField = (props) => {
  return (
    <React.Fragment>
      <NormalTextField
        Error={props.UserNameError}
        Name="UserName"
        onChange={props.onChange}
      />
      <NormalTextField
        Error={props.EmailError}
        Name="Email"
        onChange={props.onChange}
      />
      <PasswordTextField
        Error={props.PasswordError}
        onChange={props.onChange}
      />
    </React.Fragment>
  );
};

export default SignUpField;
