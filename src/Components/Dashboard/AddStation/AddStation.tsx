import React from 'react';
import addStationStyle from "../../../assets/Styles/AddStation.module.css";
import { useState } from 'react';

const AddStation = () => {
    const [name, setName] = useState("");
    const [code, setCode] = useState<any>(0);
    const [image, setImage] = useState<any>(null)

    const addStation = (e: any) => {
        e.preventDefault();

        const formData: any = {
            Name: name,
            Code: code,
            Image: image
        }

        fetch('https://signal-air-radio-station.herokuapp.com/addStation', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(result => {
                if (result.acknowledged) {
                    alert("Station Added Successfully")
                }
            })
    }



    return (
        <div className={addStationStyle.bgStyle}>
            <h1 className={addStationStyle.head}>Add a New Station</h1>
            <form onSubmit={addStation} className={addStationStyle.formContainer}>
                <div>
                    <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Station Name Here" />
                </div>
                <div>
                    <input onChange={(e) => setCode(e.target.value)} type="number" placeholder="Station Code Here" />
                </div>
                <div>
                    <input onChange={(e) => setImage(e.target.files)} type="file" />
                </div>
                <div>
                    <input className={addStationStyle.submit} type="submit" value="Add Station" />
                </div>
            </form>
        </div>
    );
};

export default AddStation;