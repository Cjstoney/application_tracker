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