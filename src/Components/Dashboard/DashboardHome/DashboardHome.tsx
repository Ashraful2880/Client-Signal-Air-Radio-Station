import React from 'react';
import style from "../../../assets/Styles/DashboardHome.module.css";

const DashboardHome = () => {
    return (
        <div className={style.bgStyle}>
            <div className={style.container}>
                <img src="https://lh3.googleusercontent.com/a-/AOh14GjtMugKN01IsyUPYhjf8nysWcxVPMO8pSm0E-CN1A=s96-c" alt="User" />
                <h1>Hi,</h1>
                <h3>User Name</h3>
                <h2>Welcome to <span>Signal Air Radio Station</span> </h2>
                <p>Do you want to control your expenses and be always aware of how much money you have spent?</p>
            </div>
        </div>
    );
};

export default DashboardHome;