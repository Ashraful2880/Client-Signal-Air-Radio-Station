import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faAdd, faTrash } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import style from "../../../assets/Styles/ManageStation.module.css";

const ManageStations = () => {
    const [stations, setStations] = React.useState<
        Array<{
            Name: string,
            Code: number,
            Image: string,
            display: string
        }>
    >([])
    useEffect(() => {
        fetch("http://localhost:5000/stations")
            .then(res => res.json())
            .then(data => setStations(data)
            )
    }, [])
    return (
        <div className={style.container}>
            <h1>Manage All Stations</h1>
            <main>
                <table className={style.table}>
                    <thead className={style.tableHead}>
                        <tr>
                            <th>Station Name</th>
                            <th>Frequency</th>
                            <th>Add Station</th>
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
                                    <button onClick={() => console.log(station?.Code)}>
                                        <FontAwesomeIcon className={style.add} icon={faAdd} />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => console.log(station?.Code)}>
                                        <FontAwesomeIcon className={style.edit} icon={faEdit} />
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => console.log(station?.Code)}>
                                        <FontAwesomeIcon className={style.delete} icon={faTrash} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ManageStations;