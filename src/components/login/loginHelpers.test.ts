import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { authenticateUser,} from './loginHelpers'

Amplify.configure(awsconfig);

const comparePassword=jest.fn().mockReturnValue(true)
const user = {
    userSub:'123456789'
}

Auth.signUp = jest.fn().mockResolvedValue(
    () => user);

describe('the authenticateUser function',()=>{
    it('creates a new user correctly',async ()=>{
        const email='email@email.com'
        const password='Password1!'
        const newUserStatus=true

        await authenticateUser({email,password,confirmationPassword:password,newUserStatus})
        expect(comparePassword).toHaveBeenCalled()
    })

})
