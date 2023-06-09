import { useState} from "react";
import { useDispatch } from "react-redux";
import { 
    // signInWithGooglePopup, 
    signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"
import Button, {BUTTON_TYPE_CLASSES} from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { googleSignInStart, emailSignInStart } from "../../store/user/user.action";

import './sign-in-form.styles.scss'

const defaultFormFields = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields)

    const { email, password} = formFields;

    const dispatch = useDispatch()

    const handleChange = event =>{
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
        
    }

        const signInWithGoogle = async () => {
        
        dispatch(googleSignInStart( ))
        
    }

    const resetFormFields =() => {
        setFormFields(defaultFormFields)
    }

    const handleSubmit = async(event) => {
        event.preventDefault();

        try{
            dispatch(emailSignInStart(email, password))
            resetFormFields()
        }catch(error){
            switch(error.code){
                case "auth/wrong-password":
                alert('The password is incorrect');
                break;
                case "auth/user-not-found":
                alert('TUser was not found');
                break;
                default:
                    console.log(error)
            }}
            
        

    }


    return (
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput 
                label="Email" 
                type="email" 
                required 
                id="email" 
                onChange={handleChange} 
                name='email' 
                value={email} />

                <FormInput 
                label="Password" 
                type="password" 
                required 
                id="password"
                onChange={handleChange} 
                name='password' 
                value={password} />

                <div className="buttons-container">
                <Button type="submit">Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
        </div>
    )
}

export default SignInForm