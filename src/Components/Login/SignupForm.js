import React from 'react';
import { useReducer , useState , useRef ,useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../Store/Authentication_slice/loginSlice';
import logo from '../../assets/Amazon_logo.svg.png';
import classes from './Auth.module.css';
import {signUp , creatNewUserData} from '../../Firebase-APIS/FirebaseFunctions';
import { setUserData } from '../../Store/Authentication_slice/userDataSlice';
import { Erorrbox } from './ErorrMassage';


// the reducer function
const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME_ERROR':
      return { ...state, name: action.status };
    case 'SET_EMAIL_ERROR':
      return { ...state, email: action.status };
    case 'SET_PASSWORD_ERROR':
      return { ...state, password: action.status };
    case 'SET_CONFIRM_PASSWORD_ERROR':
      return { ...state, confirmPassword: action.status };
    case 'SET_PASSWORD_CONFLICT_ERROR':
      return { ...state, passwordConfilict: action.status };
    default:
      return state;
  }
};



const  SignUpForm = ()=> {
  console.log('signup is running')
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  const nameInputRef = useRef();
  const emailInputRef = useRef('');
  const passwordInputRef = useRef();
  const confirmPasswordRef = useRef();
  
  
  
  
  const [formValues , setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
 


  let initialFormErorrState= {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    passwordConfilict: null,
  }
 
  const [formErorr, dispatchFormError] = useReducer(formReducer, initialFormErorrState);

  
  const submitHandler = async (event) => {
    event.preventDefault();

    // pull the input values and put it in variables
    const name = nameInputRef.current.value.trim();
    const email = emailInputRef.current.value.trim();
    const password = passwordInputRef.current.value.trim();
    const confirmPassword = confirmPasswordRef.current.value.trim();

    setFormValues({
      name: name,
      email: email,
      password: password,
      confirmPassword: confirmPassword,
    })

    // makeing the form validation
    if (name === '') {
      dispatchFormError({ type: 'SET_NAME_ERROR', status:true });
    }else{
      dispatchFormError({ type: 'SET_NAME_ERROR', status:false });
    }
    if (email === '' || !email.includes('@')) {
      dispatchFormError({ type: 'SET_EMAIL_ERROR'  , status:true });
    }else{
      dispatchFormError({ type: 'SET_EMAIL_ERROR' , status:false });
    }
    if (password === '' || password.length < 6) {
      dispatchFormError({ type: 'SET_PASSWORD_ERROR' , status: true });
    }else{
      dispatchFormError({ type: 'SET_PASSWORD_ERROR' , status: false });
    }
    if (confirmPassword === '') {
      dispatchFormError({ type: 'SET_CONFIRM_PASSWORD_ERROR' , status: true });
    }else{
      dispatchFormError({ type: 'SET_CONFIRM_PASSWORD_ERROR' , status: false });
    }
    if (password !== confirmPassword) {
      dispatchFormError({ type: 'SET_PASSWORD_CONFLICT_ERROR' , status: true });
    }else{
      dispatchFormError({ type: 'SET_PASSWORD_CONFLICT_ERROR' , status: false });
    }


  };

  useEffect( ()=>{

    const makeValidationHandler = async ()=>{
      // check the form validation befor send request to firebase 
      if (
      formErorr.name === false &&
      formErorr.email === false &&
      formErorr.password === false &&
      formErorr.confirmPassword === false &&
      formErorr.passwordConfilict === false
  
      ) {
        
        try{
          const {name , email , password } = formValues
          setIsError(false);
          // signup with firebase
          const userCredential= await signUp(email, password , name)
      
          // destructure accesstoken and uid from user
          const { accessToken, uid } = userCredential.user;
      
          // send the token and uid to the local storage & make login
          dispatch(login({accessToken, uid}));
      
          //send the user data to redux store 
          dispatch(setUserData({name , email}));
      
          // send the user data to firestore database of the user
          await creatNewUserData(uid , name , email);
      
      
          // go to home page
          Navigate('/'); 
      
      
        } catch (err) {
      
      
          // making error message more user friendly 
          setIsError(true);
          setErrorMessage(err.message); 
      
      
        }
      } else {
        console.log(formErorr);
      }
    }

    makeValidationHandler()
     
  } , [formErorr , formValues] )

        
let confirmPasswordErorr = formErorr.confirmPassword || formErorr.passwordConfilict ? true : false;
let confirmPasswordMassege= formErorr.confirmPassword ? 'Type your password again' : 'Passwords must match' ;


  return (
    <> 
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="Amazon logo"  />
        </Link>
      </div>
      <div className={classes.frame}>
        <div className={classes.formBox}>
          <form className={classes.container} onSubmit={submitHandler}>
            <h1>Create account</h1>
            {/* name input */}
            <div className={classes.text_field}>
              <label htmlFor="name">your name</label>
              <input ref={nameInputRef} type="text" id='name' placeholder='First and last name' />
              <Erorrbox ErorrState={formErorr.name} ErorrMassege='Enter your name'/>
            </div>
            {/* email */}
            <div className={classes.text_field}>
              <label htmlFor="email">Email </label>
              <input ref={emailInputRef} type="email" id='email' />
              <Erorrbox ErorrState={formErorr.email} ErorrMassege='Your email should contain (@) '/>
            </div>
            {/* password input */}
            <div className={classes.text_field}>
              <label htmlFor="password">Password</label>
              <input ref={passwordInputRef} type="password" id='password' placeholder='At least 6 characters' />
              <Erorrbox password={true} ErorrState={formErorr.password} ErorrMassege='Minimum 6 characters required'/>
            </div>
            {/* confirm password input */}
            <div className={classes.text_field}>
              <label htmlFor="confirmPassword">Re-enter password</label>
              <input ref={confirmPasswordRef} type="password" id='confirmPassword'  />
              <Erorrbox ErorrState={confirmPasswordErorr} ErorrMassege={confirmPasswordMassege}/>
            </div>
            {isError && <p className={classes.error}>{errorMessage}</p>}
            <button className={classes.button} type='submit'>continue</button>
            <div className={classes.privaciy}>
              <p>By signing in, you agree to Amazon's <span>Conditions of Use</span> and <span>Privacy Notice</span>.</p>
            </div>
            {/* devider section */}

            {/* switch the account */}
            <div className= {classes.switch} >
              <span>Already have an account?</span>
              <Link to='/signin' >Sign in</Link> 
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default SignUpForm;