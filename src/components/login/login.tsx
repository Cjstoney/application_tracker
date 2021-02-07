import { useState } from "react";

function Login(): JSX.Element {
  const [newUser, setSignUp] = useState<boolean>(true);

  return (
    <div>
      <button onClick={() => setSignUp(true)}>Sign Up</button>
      <button onClick={() => setSignUp(false)}>Login</button>
      <div>
        {/* this div contains the text inputs and submit button */}
        <label htmlFor="email">email</label>
        <input type="text"></input>
        <label htmlFor="password">password</label>
        <input type="password"></input>
        {!!newUser
          ? [
              <label htmlFor="passwordConfirm">confirm password</label>,
              <input type="password"></input>,
            ]
          : null}
        <button>submit</button>
      </div>
    </div>
  );
}

export default Login;
