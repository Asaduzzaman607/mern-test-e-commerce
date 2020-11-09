import React, { useState } from 'react';
import './login.css';
import {auth} from '../../firebaseConfig';
import {Link,useHistory, useLocation} from "react-router-dom";
import { TextField } from '@material-ui/core';
import { useStateValue } from '../StateProvider/StateProvider';


const Login = () => {
    const history = useHistory();
    const location = useLocation();
    console.log(location);
    const { from } = location.state || { from: { pathname: "/" } };
    const[name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const[haveAccount,setAccount]= useState(false);
    const[{user},dispatch] = useStateValue();
    const[{basket},basketDispatch] = useStateValue();


    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'password') {
            isFormValid = e.target.value.length > 5
            if (e.target.value.length <= 5) {
                const newUser = { ...user }
                newUser.error = "Password can't be less than 6 characters"
            }
        }
        if (isFormValid) {
            if (e.target.name === 'name'){
                setName(e.target.value)
            }
            if(e.target.name === 'email'){
                setEmail(e.target.value)
            }
            if (e.target.name === 'password'){
                setPassword(e.target.value)
            }
        }
    }
    let path;
    if(basket.length===0){
        path='/'
    }
    else{
        path='/final-order'
    }

    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                history.push(path); 
            }
        })
        .catch(error=>alert(error.message))

    }
    const register = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
        .then((auth)=>{
            if(auth){
                // auth.displayName = name
                auth.user.userName = name
                history.push(path); 
            }
        })
        .catch(error=>alert(error.message))
    }
   
    // <p>Already have an account? <span onClick={setAccount(true)} >Log In</span></p>
    //        <p>Dont have an account? <span onClick={setAccount(false)}></span>Sign Up</p>
    
    return (
        <div className='container'>
            <div className="booking-login-form">
                <div className="login-page-inner">
                    <h3 className='login-page-title'>Create an account</h3>
                    <form onSubmit={haveAccount ? signIn : register}>
                        {
                            !haveAccount &&
                            <>
                                <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '40px' }} name='name' id="standard-basic" label="First Name" />
                            </>
                        }
                        <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='email' type='email' id="standard-basic" label="Username or Email" />
                        <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='password' type='password' id="standard-basic" label="Password" />
                        {
                            haveAccount &&
                            <div style={{ marginTop: '24px', display: 'flex', justifyContent: 'space-between' }}>
                                <div>
                                    <input style={{ width: '18px' }} type="checkbox" name="remember" id="" />
                                    <label htmlFor="remember">Remember Me</label>
                                </div>
                            </div>
                        }
                        {!haveAccount && <TextField required onBlur={handleBlur} autoComplete="off" style={{ marginTop: '33px' }} name='confirmPassword' type='password' id="standard-basic" label="Confirm Password" />}
                        {!haveAccount ? <input type="submit" value="Create an Account" className="submit-btn" /> : <input type="submit" value="Log In" className="submit-btn" />}
                    </form>
                    <p className='about-account'>{!haveAccount ? "Already have an account?" : "Create An Account"} <span style={{ color: 'black', cursor: 'pointer', textDecoration: 'underline' }} onClick={() => setAccount(!haveAccount)}>{!haveAccount ? "Login" : "Sign Up"}</span></p>
                </div>
                {user?.error && <p style={{ color: 'red', textAlign: 'center' }}>{user?.error}</p>}
                {user?.success && <p style={{ color: 'green', textAlign: 'center' }}>{user?.success}</p>}
            </div>
        </div>
    );
};

export default Login;