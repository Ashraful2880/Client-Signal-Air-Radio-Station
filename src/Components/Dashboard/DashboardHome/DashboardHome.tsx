import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import style from "../../../assets/Styles/DashboardHome.module.css";
import auth from "../../../Firebase/Firebase.init";

const DashboardHome = () => {
    const [user] = useAuthState(auth);
    return (
        <div className={style.bgStyle}>
            <div className={style.container}>
                <img src={user?.photoURL || "https://www.spica-siam.com/wp-content/uploads/2017/12/user-demo.png"} alt="User" />
                <h1>Hi,</h1>
                <h3>{user?.displayName}</h3>
                <h2>Welcome to <span>Signal Air Radio Station</span> </h2>
                <p>Do you want to control your expenses and be always aware of how much money you have spent?</p>
            </div>
        </div>
    );
};

export default DashboardHome;