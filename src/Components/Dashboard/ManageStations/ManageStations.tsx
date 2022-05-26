import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import style from "../../../assets/Styles/ManageStation.module.css";
import { useState } from 'react';
import Modal from '../Modal/Modal';

const ManageStations = () => {
    const [loading, setLoading] = useState(false)
    const [display, setDisplay] = useState("none")
    const [code, setCode] = useState<any>(0);
    const [stations, setStations] = React.useState<
        Array<{
            Name: string,
            Code: number,
            Image: string,
            display: string,
            _id: any
        }>
    >([])

    // Get All Stations
    useEffect(() => {
        fetch("https://signal-air-radio-station.herokuapp.com/stations")
            .then(res => res.json())
            .then(data => setStations(data)
            )
    }, [loading, display])


    // Delete Stations
    const deleteStation = (code: number) => {
        setLoading(true);
        const proceed = window.confirm("Are You Sure ? Want to Delete?");
        if (proceed) {
            const url = `https://signal-air-radio-station.herokuapp.com/deleteStation/${code}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Station Delete Complete")
                    }
                    setLoading(false);
                })
        }
    }

    const displayName = (id: any) => {
        setDisplay("block")
        setCode(id)
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
                                    <button onClick={() => displayName(station?._id)}>
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
            {
                display === "block" && <Modal display={display} setDisplay={setDisplay} code={code} />
            }
        </div>
    );
};

export default ManageStations;