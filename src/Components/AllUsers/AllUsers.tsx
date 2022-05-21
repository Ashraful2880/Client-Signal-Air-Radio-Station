import React, { useEffect, useState } from 'react';
import axios from "axios";

const AllUsers = () => {
    const [users, setUsers] = useState([])
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
                setUsers(response.data.data);
            })
            .catch(function (error) {
                console.log("usersOnAccount error", error);
            });
    }, [token])

    console.log(users);

    return (
        <div>
            <h1>Our All Users List</h1>
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                            <th>Test</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                01
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;