import React from 'react';
import { Link } from 'react-router-dom';
import signIn from "../../assets/Styles/SignIn.module.css";
import logo from "../../assets/Images/Signal-Air-Logo.png";


const Signin = () => {
    return (
        <div className={signIn.bgStyle}>
            <div className={signIn.container}>
                <div className={signIn.formContainer}>
                    <p className={signIn.welcome}>Welcome back !!!</p>
                    <p className={signIn.login}>Login to Your Account </p>
                    <img className={signIn.mainLogo} src={logo} alt="logo" />
                    <form className={signIn.inputContainer}>
                        {/* {user.email ? setError('') : <span className="text-red-600">{error}</span>} */}

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
                            Login
                        </button>
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