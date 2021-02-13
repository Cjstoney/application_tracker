import { Auth } from "aws-amplify";
import { AuthenticateUserArgs } from "../../models/interfaces";
import { AppEnums } from '../../models/enums'

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
   if (!!newUserStatus && !comparePassword(password, confirmationPassword)) {
        /**
         * TODO: MAKE THIS NOT AN ALERT
         * this should update a class that either turn the check marks red or
         * has a message for the user
         * */

        alert("passwords do not match");
    } else if(!!newUserStatus && !!comparePassword(password, confirmationPassword)){
        try {
        const user = await Auth.signUp({
            password,
            username: email,
            attributes: {
              email,
            },
          }).then((result)=>{
            console.log(result.userSub)
            localStorage.setItem(AppEnums.AppTrackerUser, result.userSub);
            return result
            /**
             * Todo: assuming thing go well, redirect to the correct info here
             */
          })
          return user
        } catch (error) {
          alert(`${AppEnums.SignUpError} using the credentials ${email}, ${password}`)
          console.log("Their was an error signing you up", error);
        }
    }
    else {
      try {
        const user = await Auth.signIn({
          password,
          username: email,
        }).then((result) => {
          console.log(result.userSub)
          localStorage.setItem(AppEnums.AppTrackerUser, result.userSub);
          return result
          /**
           * Todo: assuming thing go well, redirect to the correct info here
           */
        });
        return user
      } catch (error) {
        alert(`${AppEnums.SignUpError} using the credentials ${email}, ${password}`)
        console.log("their was an error signing you in", error);
      } 
    }
  }