import React from 'react';
import { Link } from 'react-router-dom';
import signIn from "../../assets/Styles/SignIn.module.css";
import logo from "../../assets/Images/Signal-Air-Logo.png";
import useFirebase from '../../Hooks/UseFirebase';


const Signin = () => {
    const { user, error, setError, handleEmail, handlePassword, handleSignIn } = useFirebase();
    return (
        <div className={signIn.bgStyle}>
            <div className={signIn.container}>
                <div className={signIn.formContainer}>
                    <p className={signIn.welcome}>Welcome back !!!</p>
                    <p className={signIn.login}>Signin to Your Account </p>
                    <img className={signIn.mainLogo} src={logo} alt="logo" />
                    <form className={signIn.inputContainer} onSubmit={handleSignIn}>
                        <>
                            {user.email ? setError('') : <span className={signIn.errorStyle}>{error}</span>}

                            <p className={signIn.label}>Your Email</p>
                            <input
                                onBlur={handleEmail}
                                type="email"
                                className={signIn.email}
                                placeholder="example@gmail.com " />
                            <p className={signIn.label}>Your Password</p>
                            <input
                                onBlur={handlePassword}
                                type="password"
                                className={signIn.email}
                                placeholder="Your Password" />
                            <button
                                type="submit"
                                className={signIn.submit}>
                                Signin
                            </button>
                        </>
                    </form>
                    <p className={signIn.new}>Don't have account?
                        <Link
                            to="/signup">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div >
    );
};

export default Signin;