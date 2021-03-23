import { useState } from "react";
import { validateEmail, authenticateUser } from "./loginHelpers";
import { ChevronRight } from "@material-ui/icons";
import "./login.css";

function Login(): JSX.Element {
  // component state
  const [isNewUser, setSignUp] = useState<boolean>(true);
  const [payloadEmail, setPayloadEmail] = useState<string>("");
  const [payloadPassword, setPayloadPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  function setEmail(input: string) {
    if (!!validateEmail(input)) {
      setPayloadEmail(input);
    }
    // TODO: needs to handle a non valid email
  }

  function setPassword(input: string) {
    setPayloadPassword(input);
  }
  function confirmPassword(input: string) {
    setConfirmationPassword(input);
  }

  return (
    <div className="loginWrapper">
      <button
        className={
          !!isNewUser ? "activeType authenticationType" : "authenticationType"
        }
        id="signUpBtn"
        onClick={() => setSignUp(true)}
      >
        Sign Up
      </button>
      <button
        className={
          !isNewUser ? "activeType authenticationType" : "authenticationType"
        }
        id="signInBtn"
        onClick={() => setSignUp(false)}
      >
        Login
      </button>
      <div className="inputContainer">
        <label className="inputLabel loginEmail">
          Email
          <input
            className="loginInput loginEmail"
            id="loginEmailInput"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          ></input>
        </label>
        <label
          className="inputLabel loginPassword"
          htmlFor="loginPasswordInput"
        >
          Password
          <input
            className="loginInput loginPassword"
            id="loginPasswordInput"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          ></input>
        </label>
        {/* toggles confirmation of password based on state value */}
        {!!isNewUser ? (
          <label
            className="inputLabel loginConfirm"
            key="confirmPWord"
            htmlFor="loginConfirmInput"
          >
            Confirm Password
            <input
              className="loginInput loginConfirm"
              id="loginConfirmInput"
              key="confirmPWordInput"
              type="password"
              onChange={(event) => confirmPassword(event.target.value)}
            ></input>
          </label>
        ) : null}
        <button
          className="loginBtn"
          onClick={() =>
            authenticateUser({
              email: payloadEmail,
              password: payloadPassword,
              confirmationPassword: confirmationPassword,
              newUserStatus: isNewUser,
            })
          }
        >
          {!!isNewUser ? "Sign Up" : "Login"}
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Login;
