export interface SignUpPayload{
    email: string
    password: string
}

export interface AuthenticateUserArgs {
    email: string;
    password: string;
    confirmationPassword: string;
    newUserStatus: boolean;
  }