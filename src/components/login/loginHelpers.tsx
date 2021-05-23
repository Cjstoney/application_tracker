import { ChevronRight } from "@material-ui/icons";
import React from "react";
import { useIdentityContext } from "react-netlify-identity";

export function LoginButton(props: LoginProps) {
  const { loginUser, signupUser } = useIdentityContext();
  const { isNewUser, ...payload } = props;

  async function onLogin(loginArgs: LoginPayload) {
    const { email, password, confirmPassword } = loginArgs;

    const user = !!confirmPassword
      ? await signupUser(email, password, {})
          .then((user) => {
            console.log("Success! Signed up", user);
            return user;
          })
          .catch((err) => console.error(err))
      : await loginUser(email, password)
          .then((user) => {
            console.log("Success! Logged in!", user);
            return user;
          })
          .catch((err) => console.log(err));

    if (!!user) {
      return user;
    }
  }

  return (
    <button className="loginBtn" onClick={() => onLogin(payload)}>
      {!!isNewUser ? "Sign Up" : "Login"}
      <ChevronRight />
    </button>
  );
}

interface LoginPayload {
  email: string;
  password: string;
  confirmPassword?: string;
}

interface LoginProps {
  isNewUser: boolean;
  email: string;
  password: string;
  confirmPassword?: string;
}
