import React from 'react';
import { useState , useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/Amazon_logo.svg.png';
import classes from './LoginForm.module.css';
import { auth } from '../../firebase';
import {createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";




const  LoginForm = ()=> {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const emailInputRef = useRef('');
  const passwordInputRef = useRef();
  const Navigate = useNavigate();

  const switchAuthModeHandler = () => {
    setIsSignIn((prevState) => !prevState);
  };



  const submitHandler = async (event) => {
    event.preventDefault();
    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;


    if(isSignIn){
      // login
      try{
        setIsError(false);
        // login with firebase
        const userCredential = await signInWithEmailAndPassword(auth , email, password);
        // send the token to the local storage
        console.log(userCredential.user.accessToken);
        Navigate('/');
        
      } catch (err) {
        // making error message more user friendly (validation)
        setIsError(true);
        setErrorMessage(err.message);
      }

    }else{
      // singup
      try{
        setIsError(false);
        // signup with firebase
        const userCredential = await createUserWithEmailAndPassword(auth , email, password);
        // send the token to the local storage
        console.log(userCredential.user.accessToken);
        Navigate('/');
      } catch (err) {
        // making error message more user friendly (validation)
        setIsError(true);
        setErrorMessage(err.message);
      }
      
 
    }
  }

  return (
    <> 
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="Amazon logo"  />
        </Link>
      </div>
      <div className={classes.box}>
        <form className={classes.container} onSubmit={submitHandler}>
          <h1>{isSignIn? "Sign in" : "Sign up"}</h1>
          <div className={classes.text_field}>
            <label htmlFor="email">Email or mobile phone number</label>
            <input ref={emailInputRef} type="email" id='email' />
          </div>
          <div className={classes.text_field}>
            <label htmlFor="password">Password</label>
            <input ref={passwordInputRef} type="password" id='password' />
          </div>
          {isError && <p className={classes.error}>{errorMessage}</p>}
          <button className={classes.button} type='submit'>{isSignIn ? 'sign in' : 'sign up'}</button>
          <div className={classes.privaciy}>
            <p>By signing in, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
          </div>
          <button
            title='switch'
            type='button'
            className={classes.togle}
            onClick={switchAuthModeHandler}
          >
            {isSignIn ? 'Create new account' : 'Login with existing account'}
          </button>
        </form>
      </div>
    </>
  );
}

export default LoginForm;