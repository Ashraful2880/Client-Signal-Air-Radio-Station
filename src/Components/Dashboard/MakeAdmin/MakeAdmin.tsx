import React from 'react';
import adminStyle from "../../../assets/Styles/MakeAdmin.module.css";

const MakeAdmin = () => {
    return (
        <div className={adminStyle.adminbg}>
            <div className={adminStyle.adminContainer}>
                <div>
                    <input className={adminStyle.email} type="text" placeholder="Enter New Admin Email" />
                </div>
                <div>
                    <input className={adminStyle.submit} type="submit" value="Confirm" />
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;