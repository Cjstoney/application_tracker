import { Auth } from "aws-amplify";
import { AuthenticateUserArgs } from "../../models/interfaces";

/**
 * regex to compare email string against
 */
export function validateEmail(email:string):boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

/**
 * compares passwords
 * @param password string from corresponding input
 * @param confirmationPassword string from corresponding input
 */
export function comparePassword(password: string, confirmationPassword: string):boolean {
    return !!(password === confirmationPassword)
      
  }

  /**
   * confirms if it a new user or not,
   * checks that the passwords match and then make the api calls
   * to login or sign up
   */
  export async function authenticateUser(args: AuthenticateUserArgs) {
    const { confirmationPassword, password, email, newUserStatus } = args;
    if (!!newUserStatus) {
      if (!comparePassword(password, confirmationPassword)) {
        /**
         * TODO: MAKE THIS NOT AN ALERT
         * this should update a class that either turn the check marks red or
         * has a message for the user
         * */

        alert("passwords do not match");
      } else {
        try {
          await Auth.signUp({
            password,
            username: email,
            attributes: {
              email,
            },
          }).then((user) => {
            /**
             * Todo: assuming thing go well, redirect to the correct info here
             */
            localStorage.setItem("appTrackerUser", user.userSub);
          });
        } catch (error) {
          console.log("Their was an error signing you up", error);
        }
      }
    } else {
      try {
        await Auth.signIn({
          password,
          username: email,
        }).then((user) => {
          /**
           * Todo: assuming thing go well, redirect to the correct info here
           */
          localStorage.setItem("appTrackerUser", user.userSub);
        });
      } catch (error) {
        console.log("their was an error signing you in", error);
      }
    }
  }