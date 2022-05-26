import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import signIn from "../../assets/Styles/SignIn.module.css";
import logo from "../../assets/Images/Signal-Air-Logo.png";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from "../../Firebase/Firebase.init";


const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
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
                    <p className={signIn.welcome}>Welcome back !!!</p>
                    <p className={signIn.login}>Signin to Your Account </p>
                    <img className={signIn.mainLogo} src={logo} alt="logo" />
                    <form className={signIn.inputContainer} onSubmit={() => signInWithEmailAndPassword(email, password)}>
                        <>
                            <p className={signIn.label}>Your Email</p>
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className={signIn.email}
                                placeholder="example@gmail.com " />
                            <p className={signIn.label}>Your Password</p>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
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