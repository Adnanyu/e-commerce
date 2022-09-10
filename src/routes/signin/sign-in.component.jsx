import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utils'


const SignIn = ()=> {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return(
        <div>
            <h1>sig in page</h1>
            <button onClick={logGoogleUser}>sign in with google popup</button>
        </div>
    )
}

export default SignIn