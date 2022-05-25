import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import style from "../../../assets/Styles/ManageStation.module.css";
import { useState } from 'react';

const ManageStations = () => {
    const [display, setDisplay] = useState("none")
    const [stations, setStations] = React.useState<
        Array<{
            Name: string,
            Code: number,
            Image: string,
            display: string
        }>
    >([])

    // Get All Stations
    useEffect(() => {
        fetch("http://localhost:5000/stations")
            .then(res => res.json())
            .then(data => setStations(data)
            )
    }, [])


    // Delete Stations
    const deleteStation = (code: number) => {
        const proceed = window.confirm("Are You Sure ? Want to Delete?");
        if (proceed) {
            const url = `http://localhost:5000/deleteStation/${code}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Station Delete Complete")
                    }
                    window.location.reload();
                })
        }
    }

    return (
        <div className={style.container}>
            <h1>Manage All Stations</h1>
            <main>
                <table className={style.table}>
                    <thead className={style.tableHead}>
                        <tr>
                            <th>Station Name</th>
                            <th>Frequency</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stations.map((station) => (
                            <tr key={station?.Code} >
                                <td >
                                    {station?.Name}
                                </td>
                                <td>
                                    {station?.Code}
                                </td>
                                <td>
                                    <button onClick={() => setDisplay("block")}>
                                        <FontAwesomeIcon className={style.edit} icon={faEdit} />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => deleteStation(station?.Code)}>
                                        <FontAwesomeIcon className={style.delete} icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
            <div id="myModal" className={style.modal} style={{ display: `${display}` }}>
                <div className={style.modalContent}>
                    <span className={style.close} onClick={() => setDisplay("none")}>&times;</span>
                    <form className={style.formContainer}>
                        <h2>Change Station Details</h2>
                        <div>
                            <label htmlFor="name">Station Name</label>
                            <input type="text" placeholder="Enter Station Name" required />
                        </div>
                        <div>
                            <label htmlFor="number">Channel Number</label>
                            <input type="number" placeholder="Enter Channel Number" required />
                        </div>
                        <div>
                            <label htmlFor="file">Station Image</label>
                            <input type="file" />
                        </div>
                        <div>
                            <input className={style.submitbtn} type="submit" value="Confirm" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ManageStations;