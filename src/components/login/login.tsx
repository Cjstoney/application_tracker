import { Auth } from "aws-amplify";
import { useState } from "react";
import { validateEmail, comparePassword } from "./loginHelpers";

function Login(): JSX.Element {
  // component state
  const [isNewUser, setSignUp] = useState<boolean>(true);
  const [payloadEmail, setPayloadEmail] = useState<string>("");
  const [payloadPassword, setPayloadPassword] = useState<string>("");
  const [confirmationPassword, setConfirmationPassword] = useState<string>("");

  function setEmail(input: string) {
    !!validateEmail(input) ? setPayloadEmail(input) : console.log("not valid");
  }

  function setPassword(input: string) {
    // TODO:password still needs to be salted
    setPayloadPassword(input);
  }
  function confirmPassword(input: string) {
    setConfirmationPassword(input);
  }

  /**
   *
   * start logic function
   */

  async function createPayload(
    email: string,
    password: string,
    confirmationPassword: string
  ) {
    if (!!isNewUser) {
      if (!comparePassword(password, confirmationPassword)) {
        /**
         * TODO: MAKE THIS NOT AN ALERT
         * this should update a class that either turn the checkmarks red or
         * has a message for the user
         * */

        alert("passwords do not match");
      }
      console.log("making payloads");
    }
    const payload = { email, password };
    console.log("old user Payload", payload);
    /**TODO:do the magic auth stuff here
     * needs another if statement to enact either the signup of the login.
     */
    if (!!isNewUser) {
      try {
        const { user } = await Auth.signUp({
          password,
          username: email,
        });
        /**
         * Todo: assuming thing go well, redirect to the correct info here
         */
      } catch (error) {
        console.log("Their was an error signing you up", error);
      }
    }
    try {
      const { user } = await Auth.signIn({
        password,
        username: email,
      });
      /**
       * Todo: assuming thing go well, redirect to the correct info here
       */
    } catch (error) {
      console.log("their was an error signing you up", error);
    }
  }

  /**
   * end logic functions
   */

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
            createPayload(payloadEmail, payloadPassword, confirmationPassword)
          }
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
