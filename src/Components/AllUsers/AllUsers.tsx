import React, { useEffect } from 'react';
import axios from "axios";
import userStyle from "../../assets/Styles/Users.module.css";

const AllUsers = () => {

    const [users, setUsers] = React.useState<
        Array<{
            id: number,
            name: string,
            email: string,
            gender: string,
            status: string
        }>
    >([])

    const token = process.env.REACT_APP_USER_TOKEN;

    useEffect(() => {
        const usersOnAccount = `https://gorest.co.in/public/v1/users`;
        axios
            .get(usersOnAccount, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then(function (response) {
                setUsers(response.data?.data);
            })
            .catch(function (error) {
                console.log("usersOnAccount error", error);
            });
    }, [token])

    return (
        <div>
            <h1>Our All Users List</h1>
            <div className={userStyle.tableContainer}>
                <table className={userStyle.table}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users?.map((user) =>
                                <tr key={user?.id}>
                                    <td>{user?.id}</td>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>{user?.gender}</td>
                                    <td>{user?.status}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;