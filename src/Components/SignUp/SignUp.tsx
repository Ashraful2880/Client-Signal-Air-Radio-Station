import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/Signal-Air-Logo.png";
import signIn from "../../assets/Styles/SignIn.module.css";

const SignUp = () => {
    return (
        <div className={signIn.bgStyle}>
            <div className={signIn.container}>
                <div className={signIn.formContainer}>
                    <p className={signIn.welcome}>Please Signup</p>
                    <img className={signIn.mainLogo} src={logo} alt="logo" />
                    <form className={signIn.inputContainer}>
                        {/* {user.email ? setError('') : <span className="text-red-600">{error}</span>} */}

                        <p className={signIn.label}>Your Name</p>
                        <input
                            // onBlur={handleEmail}
                            type="name"
                            className={signIn.email}
                            placeholder="Your Name " />
                        <p className={signIn.label}>Your Email</p>
                        <input
                            // onBlur={handleEmail}
                            type="email"
                            className={signIn.email}
                            placeholder="example@gmail.com " />
                        <p className={signIn.label}>Your Password</p>
                        <input
                            // onBlur={handlePassword}
                            type="password"
                            className={signIn.email}
                            placeholder="Your Password" />
                        <button
                            type="submit"
                            className={signIn.submit}>
                            Signup
                        </button>
                    </form>
                    <p className={signIn.new}>Already Register?
                        <Link
                            to="/signin">
                            Sign in here
                        </Link>
                    </p>
                    <button
                        // onClick={googleSignIn}
                        className={signIn.googleSignin}>
                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/sign_in_2-svg2.svg" alt="google" />
                        <p>
                            Continue with Google
                        </p>
                    </button>
                </div>
            </div>
        </div >
    );
};

export default SignUp;