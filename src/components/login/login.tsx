import { useState } from "react";

function Login(): JSX.Element {
  const [newUser, setSignUp] = useState<boolean>(true);

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
