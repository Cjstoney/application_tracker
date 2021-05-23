import React, { useState } from "react";
import "./login.css";
import { LoginButton } from "./loginHelpers";

function Login(): JSX.Element {
  // component state
  const [isNewUser, setSignUp] = useState<boolean>(true);
  const [payloadEmail, setPayloadEmail] = useState<string>("");
  const [payloadPassword, setPayloadPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  function setEmail(input: string) {
    setPayloadEmail(input);
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
      <form className="inputContainer">
        <label className="inputLabel loginEmail">
          Email
          <input
            className="loginInput loginEmail"
            id="loginEmailInput"
            type="text"
            autoComplete="email@email.com"
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
            autoComplete="password"
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
              autoComplete="confirm password"
              onChange={(event) => confirmPassword(event.target.value)}
            ></input>
          </label>
        ) : null}
        <LoginButton
          isNewUser={isNewUser}
          email={payloadEmail}
          password={payloadPassword}
          confirmPassword={confirmationPassword}
        />
      </form>
    </div>
  );
}

export default Login;
