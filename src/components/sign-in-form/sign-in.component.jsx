import { useState } from "react";
import FormInput from "../form-input-component/form-input.component";

import { signInAuthUserWithEmailAndPassword, 
    signInWithGooglePopup, 
    createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utils'
import './sign-in-form.style.scss'
import Button from "../button.component/button.component";
const defaultFormFeilds = {
    email: '',
    password: '',
}

const SignInForm = ()=> {
    const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
    const { email, password} = formFeilds;
    

    const resetFormFeilds = () => {
        setFormFeilds(defaultFormFeilds)
    }

    const logGoogleUser = async () => {
        await signInWithGooglePopup();
    };

    const handelSubmit = async (event) => {
        event.preventDefault();

    
        try{
            const { user } = await signInAuthUserWithEmailAndPassword(email, password);
  
            resetFormFeilds()
        }catch(error){
            if(error.code == 'auth/wrong-password'){
                alert('the password you entered is incorrect')
            }else if(error.code == 'auth/user-not-found'){
                alert('this email doesnt exist')
            }
            console.log(error)
        }
    }
    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormFeilds({ ...formFeilds, [name]: value})
    }
    return(
        <div className="sign-in-container" >
            <h2>Already have an account</h2>
            <span>sign in with your email and password</span>
            <form onSubmit={handelSubmit}>
                
                <FormInput
                label= 'email' 
                type="Email" required 
                onChange={handleChange} 
                value={email} 
                name= 'email' />
                <FormInput
                label= 'Password' 
                type="password" required 
                onChange={handleChange} 
                value={password} 
                name= 'password' />
                <div className="buttons-container">
                <Button type="submit">Sign in</Button>
                <Button type="button" buttonType= "google" onClick={logGoogleUser} >Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm