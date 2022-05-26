import React, { useEffect, useState } from 'react';
import style from "../../../assets/Styles/ManageStation.module.css";

const Modal = ({ display, setDisplay, code }: any) => {
    const [editStations, setEditStations] = useState<any>();
    const [stationName, setStationName] = useState("");
    const [stationCode, setStationCode] = useState<any>(0);

    useEffect(() => {
        fetch(`http://localhost:5000/findSingleStation/${code}`)
            .then(res => res.json())
            .then(data => setEditStations(data))
    }, [code])

    const editStation = (event: any) => {
        event.preventDefault();

        const formData: any = {
            Name: stationName,
            Code: stationCode,
            // Image: image
        }
        console.log(formData);

        fetch(`http://localhost:5000/updateSingleStation/${code}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert("Station Updated Successfully")
                    setDisplay("none")
                }
            })
    }

    return (
        <div id="myModal" className={style.modal} style={{ display: `${display}` }}>
            <div className={style.modalContent}>
                <span className={style.close} onClick={() => setDisplay("none")}>&times;</span>
                <form className={style.formContainer} onSubmit={(event) => editStation(event)}>
                    <h2>Change Station Details</h2>
                    <div>
                        <label htmlFor="name">Station Name</label>
                        <input onChange={(e) => setStationName(e.target.value)} type="text" placeholder="Enter Station Name" defaultValue={editStations?.Name} required />
                    </div>
                    <div>
                        <label htmlFor="number">Channel Number</label>
                        <input onChange={(e) => setStationCode(e.target.value)} type="number" placeholder="Enter Channel Number" defaultValue={editStations?.Code} required />
                    </div>
                    <div>
                        <label htmlFor="file">Station Image</label>
                        <input type="file" defaultValue={editStations?.Image} />
                    </div>
                    <div>
                        <input className={style.submitbtn} type="submit" value="Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Modal;