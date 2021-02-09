import Amplify, { Auth } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import { authenticateUser} from './loginHelpers'

Amplify.configure(awsconfig);



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
    })

})
