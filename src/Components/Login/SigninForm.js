import React from "react";
import { useState, useRef, useReducer, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../Store/Authentication_slice/loginSlice";
import logo from "../../assets/Amazon_logo.svg.png";
import classes from "./Auth.module.css";
import signIn from "../../Firebase-APIS/Authentication/signIn";
import getUserData from "../../Firebase-APIS/Authentication/getUserData";
import { setUserData } from "../../Store/Authentication_slice/userDataSlice";
import { Erorrbox } from "./ErorrMassage";

// the reducder function
const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL_ERROR":
      return { ...state, email: action.status };
    case "SET_PASSWORD_ERROR":
      return { ...state, password: action.status };
    default:
      return state;
  }
};

const SigninForm = () => {
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // pull the input values and put it in variables
  const emailInputRef = useRef("");
  const passwordInputRef = useRef();
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  // state for form values
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  let initialFormErorrState = {
    email: null,
    password: null,
  };
  // state for formvalidation
  const [formErorr, dispatchFormError] = useReducer(
    formReducer,
    initialFormErorrState
  );

  const submitHandler = async (event) => {
    event.preventDefault();

    const email = emailInputRef.current.value;
    const password = passwordInputRef.current.value;

    setFormValues({
      email: email,
      password: password,
    });

    // makeing the form validation
    if (email === "" || !email.includes("@")) {
      dispatchFormError({ type: "SET_EMAIL_ERROR", status: true });
    } else {
      dispatchFormError({ type: "SET_EMAIL_ERROR", status: false });
    }
    if (password === "" || password.length < 6) {
      dispatchFormError({ type: "SET_PASSWORD_ERROR", status: true });
    } else {
      dispatchFormError({ type: "SET_PASSWORD_ERROR", status: false });
    }
  };

  useEffect(() => {
    const makeValidationHandler = async () => {
      // check the form validation befor send request to firebase
      if (formErorr.email === false && formErorr.password === false) {
        // login
        try {
          setIsError(false);

          const { email, password } = formValues;

          // login with firebase
          const userCredential = await signIn(email, password);

          // destructure accesstoken and uid from user
          const { accessToken, uid } = userCredential.user;

          // send the token and uid to the local storage & make login
          dispatch(login({ accessToken, uid }));

          // get user data from firestore data base with the user uid
          const userData = await getUserData(uid);

          //send the user data to redux store (name & email)
          dispatch(setUserData(userData));

          // got to home
          Navigate("/");
        } catch (err) {
          // making error message more user friendly (validation)
          setIsError(true);
          setErrorMessage(err.message);
        }
      } else {
        console.log(formErorr);
      }
    };

    makeValidationHandler();
  }, [formErorr]);

  return (
    <>
      <div className={classes.logo}>
        <Link to="/">
          <img src={logo} alt="Amazon logo" />
        </Link>
      </div>
      <div className={classes.frame}>
        <div className={classes.formBox}>
          <form className={classes.container} onSubmit={submitHandler}>
            <h1>Sign in</h1>
            {/* email */}
            <div className={classes.text_field}>
              <label htmlFor="email">Email </label>
              <input ref={emailInputRef} type="email" id="email" />
              <Erorrbox
                ErorrState={formErorr.email}
                ErorrMassege="Your email should contain (@) "
              />
            </div>
            {/* password input */}
            <div className={classes.text_field}>
              <label htmlFor="password">Password</label>
              <input
                ref={passwordInputRef}
                type="password"
                id="password"
                placeholder="At least 6 characters"
              />
              <Erorrbox
                password={true}
                ErorrState={formErorr.password}
                ErorrMassege="Minimum 6 characters required"
              />
            </div>

            {isError && <p className={classes.error}>{errorMessage}</p>}
            <button className={classes.button} type="submit">
              continue
            </button>
            <div className={classes.privaciy}>
              <p>
                By signing in, you agree to Amazon's{" "}
                <span>Conditions of Use</span> and <span>Privacy Notice</span>.
              </p>
            </div>
          </form>
        </div>
        {/* devider section */}
        <div className={classes.devider}>
          <h5>New to Amazon</h5>
        </div>
        {/* switch the account */}
        <div className={`${classes.creatAccount}`}>
          <Link to="/signup">create your Amazon account</Link>
        </div>
      </div>
    </>
  );
};

export default SigninForm;
