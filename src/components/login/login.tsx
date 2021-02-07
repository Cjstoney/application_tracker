import { useState } from "react";

function Login(): JSX.Element {
  const [isNewUser, setSignUp] = useState<boolean>(true);
  // functions needed to handle collection of inputs and direct to the sign up or login on the backend

  return (
    <div>
      <button onClick={() => setSignUp(true)}>Sign Up</button>
      <button onClick={() => setSignUp(false)}>Login</button>
      <div>
        <label htmlFor="email">email</label>
        <input type="text"></input>
        <label htmlFor="password">password</label>
        <input type="password"></input>
        {/* toggles confirmation of password based on state value */}
        {!!isNewUser
          ? [
              <label key="confirmPWord" htmlFor="passwordConfirm">
                confirm password
              </label>,
              <input key="confirmPWordInput" type="password"></input>,
            ]
          : null}
        <button>submit</button>
      </div>
    </div>
  );
}

export default Login;
