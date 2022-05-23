import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageStations from '../ManageStations/ManageStations';
import dashStyle from "../../../assets/Styles/Dashboard.module.css";
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const Dashboard = () => {
    return (
        <div className={dashStyle.container}>
            <aside className={dashStyle.menuArea}>
                <div className={dashStyle.menuContainer}>
                    <Link to="/dashboard">
                        Dashboard
                    </Link>
                    <Link to="manageStations">
                        Manage Station
                    </Link>
                    <Link to="makeAdmin">
                        Make Admin
                    </Link>
                </div>
            </aside>
            <section>
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="manageStations" element={<ManageStations />} />
                    <Route path="makeAdmin" element={<MakeAdmin />} />
                </Routes>
            </section>
        </div>
    );
};

export default Dashboard;