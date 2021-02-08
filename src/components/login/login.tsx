import { useState } from "react";
import { validateEmail, authenticateUser } from "./loginHelpers";

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
    <div>
      <button onClick={() => setSignUp(true)}>Sign Up</button>
      <button onClick={() => setSignUp(false)}>Login</button>
      <div>
        <label htmlFor="email">email</label>
        <input
          type="text"
          onChange={(event) => setEmail(event.target.value)}
        ></input>
        <label htmlFor="password">password</label>
        <input
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        ></input>
        {/* toggles confirmation of password based on state value */}
        {!!isNewUser
          ? [
              <label key="confirmPWord" htmlFor="passwordConfirm">
                confirm password
              </label>,
              <input
                key="confirmPWordInput"
                type="password"
                onChange={(event) => confirmPassword(event.target.value)}
              ></input>,
            ]
          : null}
        <button
          onClick={() =>
            authenticateUser({
              email: payloadEmail,
              password: payloadPassword,
              confirmationPassword: confirmationPassword,
              newUserStatus: isNewUser,
            })
          }
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
