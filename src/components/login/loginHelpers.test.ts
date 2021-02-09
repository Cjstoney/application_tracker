import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { authenticateUser} from './loginHelpers'

Amplify.configure(awsconfig);


jest.spyOn(window, 'alert').mockImplementation(() => {});
jest.spyOn(Storage.prototype,'setItem').mockImplementation(()=>{})

describe('the authenticateUser function',()=>{

    beforeEach(()=>{
        jest.clearAllMocks()
        const user = {
            userSub:'123456789'
        } as any
        Auth.signUp = jest.fn().mockResolvedValue(user);
    })

    it('creates a new user correctly',async ()=>{
        const email='email@email.com'
        const password='Password1!'
        const newUserStatus=true

        const result = await authenticateUser({email,password,confirmationPassword:password,newUserStatus})
        expect(result).not.toBeUndefined()
        expect(Auth.signUp).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalledTimes(1)
        expect(localStorage.setItem).toHaveBeenCalledWith("appTrackerUser", result.userSub)
    })

    it('does not allow for a user sto sign up with mismatched creds', async()=>{
        const email='email@email.com'
        const password='Password1!'
        const confirmationPassword='Password1'
        const newUserStatus=true

        const result = await authenticateUser({email,password,confirmationPassword,newUserStatus})
        expect(result).toBeUndefined()
        expect(window.alert).toHaveBeenCalledTimes(1)
        expect(Auth.signUp).not.toHaveBeenCalledTimes(1)
    })

})
