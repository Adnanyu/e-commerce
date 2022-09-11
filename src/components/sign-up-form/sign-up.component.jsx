import { useState } from "react";
import FormInput from "../form-input-component/form-input.component";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utilities/firebase/firebase.utils'
import './sign-up-form.style.scss'
import Button from "../button.component/button.component";
const defaultFormFeilds = {
    displayName: '',
    email: '',
    password: '',
    comfirmPassword: ''
}

const SignUpForm = ()=> {
    const [formFeilds, setFormFeilds] = useState(defaultFormFeilds);
    const {displayName, email, password, comfirmPassword} = formFeilds;
    console.log(formFeilds)

    const resetFormFeilds = () => {
        setFormFeilds(defaultFormFeilds)
    }
    const handelSubmit = async (event) => {
        event.preventDefault();

        if(password !== comfirmPassword){
            alert('passwords doesnt match');
            return;
        }

        try{
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
    
            await createUserDocumentFromAuth(user, { displayName })
            resetFormFeilds();
        }catch(error){
            if(error.code == 'auth/email-already-in-use'){
                alert('the email is already taken, please choose another email');
            }else{
                console.log('error with user creation ', error)
            }  
        }
    }
    const handleChange = (event) => {
        const { name, value} = event.target;

        setFormFeilds({ ...formFeilds, [name]: value})
    }
    return(
        <div>
            <h2>Don't have an account</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handelSubmit}>
                <FormInput
                label = 'Display name'
                type="text"  
                required onChange={handleChange}
                 value={displayName} 
                 name= 'displayName' 
                 />
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
                <FormInput
                label='Comfirm password' 
                type="password" required 
                onChange={handleChange} 
                value={comfirmPassword} 
                name= 'comfirmPassword' />
                <Button type="submit">submit</Button>
            </form>
        </div>
    )
}
export default SignUpForm