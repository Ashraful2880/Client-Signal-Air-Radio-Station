import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/Images/Signal-Air-Logo.png";
import signIn from "../../assets/Styles/SignIn.module.css";
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../Firebase/Firebase.init";

const SignUp = () => {
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    if (error) {
        return (
            <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p style={{ minHeight: "90vh" }}>Loading...</p>;
    }

    return (
        <div className={signIn.bgStyle}>
            <div className={signIn.container}>
                <div className={signIn.formContainer}>
                    <p className={signIn.welcome}>Please Signup</p>
                    <img className={signIn.mainLogo} src={logo} alt="logo" />
                    <form className={signIn.inputContainer} onSubmit={() => createUserWithEmailAndPassword(email, password)}>
                        <>
                            <p className={signIn.label}>Your Name</p>
                            <input
                                onChange={(e) => setName(e.target.value)}
                                type="name"
                                className={signIn.email}
                                placeholder="Your Name " />
                            <p className={signIn.label}>Your Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className={signIn.email}
                                placeholder="example@gmail.com" required />
                            <p className={signIn.label}>Your Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                className={signIn.email}
                                placeholder="Your Password" required />
                            <button
                                type="submit"
                                className={signIn.submit}>
                                Signup
                            </button>
                        </>
                    </form>
                    <p className={signIn.new}>Already Register?
                        <Link
                            to="/signin">
                            Sign in here
                        </Link>
                    </p>
                    <button
                        onClick={() => signInWithGoogle()}
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